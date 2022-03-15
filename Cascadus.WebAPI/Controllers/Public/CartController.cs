using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Cascadus.BAL.Implementation;
using Cascadus.BAL.Interface;
using Cascadus.Model.Configuration;
using Cascadus.Model.Helpers;
using Cascadus.Model.Models;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace Cascadus.WebAPI.Controllers.Public
{
    [Route("api/public/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly IKupacService _kupacService;
        private readonly IRacunService _racunService;
        private readonly IStavkaService _stavkaService;
        private readonly IProizvodService _proizvodService;
        private readonly IPopustKodService _popustKodService;
        private readonly IMailService _mailService;
        private readonly IPaymentService _paymentService;
        private readonly IWebHostEnvironment _env;
        private readonly IAntiforgery _antiforgery;

        private const String ERROR_MESSAGE = "Error occured on CartController. Please inform system admin about this problem.";
        private const Decimal shippingPrice = 30;
        private const Decimal freeShippingPriceLimit = 9;

        public CartController(
            IKupacService kupacService,
            IRacunService racunService,
            IStavkaService stavkaService,
            IProizvodService proizvodService,
            IPopustKodService popustKodService,
            IMailService mailService,
            IPaymentService paymentService,
            IWebHostEnvironment env,
            IAntiforgery antiforgery)
        {
            _kupacService = kupacService;
            _racunService = racunService;
            _stavkaService = stavkaService;
            _proizvodService = proizvodService;
            _popustKodService = popustKodService;
            _mailService = mailService;
            _paymentService = paymentService;
            _env = env;
            _antiforgery = antiforgery;
        }

        [HttpPost("placeOrder")]
        [AllowAnonymous]
        public async Task<IActionResult> PlaceOrder([FromBody] OrderViewModel orderModel)
        {
            if (Toolbox.ValidateOrder(orderModel))
            {
                return BadRequest();
            }
            var order = orderModel;

            try
            {

                //dodavanje kupca
                KupacViewModel buyer = new KupacViewModel
                {
                    Ime = order.Name,
                    Prezime = order.Surname,
                    Email = order.Email,
                    Grad = order.City,
                    Ulica = order.Street,
                    Kontakt = order.Contact,
                    KucniBroj = order.HouseNumber,
                    PostanskiBroj = order.PostNumber
                };
                int buyerId = await _kupacService.Add(buyer);

                RacunViewModel invoice = new RacunViewModel
                {
                    KupacId = buyerId,
                    DatumIzdavanja = DateTime.Now,
                    Guid = Guid.NewGuid().ToString(),
                    Izbrisano = false,
                    KomentarNarudzbe = order.OrderComment,
                    PracenjePosiljke = "",
                    DatumSlanja = null,
                    NacinPlacanja = order.PaymentModel.PaymentMethod,
                };

                //postavljanje statusa i potpisa racuna
                //signature & approval code = 0000 is success, -1 is fail, empty string is pending
                if (order.PaymentModel.PaymentMethod == "CorvusPay")
                {
                    invoice.Status = "pending";
                    invoice.Signature = "-1";
                    invoice.ApprovalCode = "-1";
                    invoice.NacinPlacanja = "CorvusPay";
                }
                else if (order.PaymentModel.PaymentMethod == "OnDelivery")
                {
                    invoice.Status = "success";
                    invoice.Signature = "0000";
                    invoice.ApprovalCode = "0000";
                    invoice.NacinPlacanja = "OnDelivery";
                }
                else
                {
                    invoice.Status = "fail";
                    invoice.Signature = "-100";
                    invoice.ApprovalCode = "-100";
                    invoice.NacinPlacanja = "None";
                }
                int invoiceId = await _racunService.Add(invoice);
                invoice.Stavke = new List<StavkaViewModel>();

                //ubacivanje stavki za ovaj racun
                foreach (var cartItem in order.PaymentModel.Cart)
                {
                    var product = await _proizvodService.Get((int.Parse(cartItem.Key.ToString())));
                    var discountCode = await _popustKodService.Lookup(order.DiscountCode);

                    StavkaViewModel item = new StavkaViewModel
                    {
                        CijenaPoKomadu = product.Cijena,
                        Izbrisano = false,
                        Kolicina = int.Parse(cartItem.Value),
                        Proizvod = product,
                        ProizvodId = int.Parse(cartItem.Key.ToString()),
                        RacunId = invoiceId,
                        PopustKodId = 1
                    };

                    if (discountCode != null)
                    {
                        item.PopustKodId = discountCode.Id;
                        item.PopustKod = discountCode;

                        var priceNoDiscount = item.Kolicina * item.CijenaPoKomadu;
                        decimal discount = Convert.ToDecimal(discountCode.PopustUpostocima) / 100;

                        item.UkupnaCijena = priceNoDiscount - (priceNoDiscount * discount);
                    }
                    else
                    {
                        item.UkupnaCijena = Convert.ToDecimal(item.Kolicina) * item.CijenaPoKomadu;
                    }
                    await _stavkaService.AddItemForInvoice(invoiceId, item);
                    //ukloni stavka.kolicina sa skladista!
                    //await _proizvodService.DecreaseProductInventory(item.Kolicina);
                    invoice.Stavke.Add(item);

                }
                decimal total = 0; ;
                invoice.Stavke.ToList().ForEach(i =>
                {
                    total += i.UkupnaCijena;
                });
                if (total < freeShippingPriceLimit)
                {
                    StavkaViewModel shipping = new StavkaViewModel
                    {
                        CijenaPoKomadu = shippingPrice,
                        Izbrisano = false,
                        Kolicina = 1,
                        PopustKodId = 1,
                        RacunId = invoiceId,
                        ProizvodId = 1,
                        UkupnaCijena = shippingPrice
                    };
                    await _stavkaService.AddItemForInvoice(invoiceId, shipping);
                }

                order.PaymentModel.Amount = await CalculateTotalCartAmount(invoiceId);

                //provjera racuna i stavljanje 
                var result = CartResponseStatusCodes.FAIL;
                var racun = await _racunService.Get(invoiceId);
                if (racun != null || racun.Stavke.Count > 0)
                {
                    switch (order.PaymentModel.PaymentMethod)
                    {
                        case "OnDelivery":
                            result = CartResponseStatusCodes.SUCCESS;
                            break;
                        case "CorvusPay":
                            result = CartResponseStatusCodes.PENDING;
                            break;
                        default:
                            result = CartResponseStatusCodes.FAIL;
                            break;
                    }

                    //returns success if order payment was OnDelivery
                    if (result == CartResponseStatusCodes.SUCCESS)
                    {

                        //send emails as notifications

                        emailNotification(AccountRoles.Admin, order.DiscountCode, order.PaymentModel.PaymentMethod, racun, buyer);
                        emailNotification(AccountRoles.User, order.DiscountCode, order.PaymentModel.PaymentMethod, racun, buyer);


                        //respond with buyer name, order info and payment result
                        return Ok(new JsonResult(new CartResponse(buyer.Ime, racun.BrojRacuna, result)));
                    }

                    //returns buyer name, invoiceID, result, corvus url and corvus parameters for payment redirection
                    else if (result == CartResponseStatusCodes.PENDING)
                    {
                        CorvusPaymentViewModel corvusPaymentViewModel = await _paymentService.GeneratePaymentUrl(racun, order);
                        racun.Signature = corvusPaymentViewModel.Signature;

                        var updated = await _racunService.Update(invoiceId, racun);
                        Response.Headers.Add("X-XSRF-TOKEN", _antiforgery.GetAndStoreTokens(this.HttpContext).RequestToken.ToString());
                        return Ok(new JsonResult(new CartResponse(buyer.Ime, racun.BrojRacuna, result, corvusPaymentViewModel.PaymentUrl, corvusPaymentViewModel.Parameters)));
                    }
                    //is something went wrong, remove invoice
                    else
                    {
                        result = CartResponseStatusCodes.FAIL;
                        await _racunService.Delete(invoice.Id);
                        return Conflict(new JsonResult(new CartResponse(buyer.Ime, "0", result)));
                    }
                }
                else
                {
                    result = CartResponseStatusCodes.FAIL;
                    await _racunService.Delete(invoice.Id);
                    return Conflict(new JsonResult(new CartResponse(buyer.Ime, "0", result)));
                }

            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + e.ToString());
            }
        }

        private async Task<float> CalculateTotalCartAmount(int invoiceId)
        {
            float amount = 0;
            IEnumerable<StavkaViewModel> items = null;
            items = await _stavkaService.GetItemsForInvoice(invoiceId);
            foreach (var item in items)
            {
                amount += float.Parse(item.UkupnaCijena.ToString());
            }
            return amount;
        }

        [HttpPost("corvusVerify")]
        [AllowAnonymous]
        public async Task<IActionResult> VerifyCorvusPayTransaction([FromBody] CorvusVerificationViewModel verificationModel)
        {
            RacunViewModel invoiceViewModel = null;
            invoiceViewModel = await _paymentService.VerifyCorvusPayment(verificationModel.OrderNumber, verificationModel.Signature);
            //ako je provjera potpisa uspjesna, oznaci racun kao spremnim i posalji email notification
            if (invoiceViewModel != null)
            {
                invoiceViewModel.ApprovalCode = verificationModel.ApprovalCode;
                invoiceViewModel.Signature = verificationModel.Signature;

                //123456 - predautorizacija
                //potrebno cimanje corvus apija
                //if (verificationModel.ApprovalCode == "123456")
                //{
                //    _paymentService.CheckCorvusTransaction(new CorvusManageTransactionViewModel(invoiceViewModel.BrojRacuna));
                //}

                invoiceViewModel.Status = "success";
                await _racunService.Update(invoiceViewModel.Id, invoiceViewModel);
                RacunViewModel invoice = await _racunService.GetInvoiceByInvoiceNumber(invoiceViewModel.BrojRacuna);
                invoice.Stavke.ToList().ForEach(async item => item.Proizvod = await _proizvodService.Get(item.ProizvodId));
                KupacViewModel buyer = invoice.Kupac;
                var discountCode = await _popustKodService.Get(invoice.Stavke.First().PopustKodId);




                //send email notification
                emailNotification(AccountRoles.User, discountCode.PopustKod, "CorvusPay", invoice, buyer);
                emailNotification(AccountRoles.Admin, discountCode.PopustKod, "CorvusPay", invoice, buyer);
                return Ok(new JsonResult(new CartResponse(buyer.Ime, invoice.BrojRacuna, CartResponseStatusCodes.SUCCESS)));
            }
            //ako je validacija potpisa neuspjesna, oznaci racun kao neispravnim
            else
            {
                invoiceViewModel = await _racunService.GetInvoiceByInvoiceNumber(verificationModel.OrderNumber);
                invoiceViewModel.ApprovalCode = "-1";
                invoiceViewModel.Status = "fail";
                var invoice = await _racunService.Update(invoiceViewModel.Id, invoiceViewModel);

                return BadRequest(new JsonResult(new CartResponse(invoice.Kupac.Ime, "0", CartResponseStatusCodes.FAIL)));
            }
        }


        [HttpPost("corvusCancel")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> CancelCorvusPayment([FromBody] CorvusVerificationViewModel verificationModel)
        {
            RacunViewModel invoiceViewModel = await _paymentService.CancelCorvusPayment(verificationModel.OrderNumber);
            //ako je provjera potpisa uspjesna, oznaci racun kao spremnim i posalji email notification
            if (invoiceViewModel != null)
            {
                invoiceViewModel.ApprovalCode = verificationModel.ApprovalCode;
                invoiceViewModel.Status = "fail";
                var invoice = await _racunService.Update(invoiceViewModel.Id, invoiceViewModel);

                String discountCode = null;
                IList<MyKeyValuePair<int, String>> cart = new List<MyKeyValuePair<int, String>>();
                foreach (var item in invoice.Stavke)
                {
                    if (item.PopustKodId != 1)
                    {
                        discountCode = item.PopustKod.PopustKod;
                    }
                    MyKeyValuePair<int, String> keyValuePair = new MyKeyValuePair<int, String>();
                    keyValuePair.Key = item.ProizvodId;
                    keyValuePair.Value = item.Kolicina.ToString();
                    cart.Add(keyValuePair);
                }

                KupacViewModel buyer = invoice.Kupac;

                return Ok(new JsonResult(new CartResponse(buyer.Ime, "0", CartResponseStatusCodes.FAIL)));
            }
            else
            {
                invoiceViewModel.ApprovalCode = "-1";
                invoiceViewModel.Status = "fail";
                var invoice = await _racunService.Update(invoiceViewModel.Id, invoiceViewModel);

                return BadRequest(new JsonResult(new CartResponse(invoice.Kupac.Ime, "0", CartResponseStatusCodes.FAIL)));
            }
        }


        private async void emailNotification(AccountRoles role, String discountCode, String paymentGateway, RacunViewModel invoice, KupacViewModel buyer)
        {
            //getting template path WITHOUT filename.extension
            var pathToFile = _env.WebRootPath + Path.DirectorySeparatorChar.ToString()
                + "templates"
                + Path.DirectorySeparatorChar.ToString();


            List<MailboxAddress> mailboxAddresses = new List<MailboxAddress>();
            mailboxAddresses.Add(MailboxAddress.Parse(Configuration.BUSSINESS_EMAIL));
            var discount = await _popustKodService.Lookup(discountCode);
            StringBuilder sb = new StringBuilder();
            switch (role)
            {
                case AccountRoles.Admin:
                    #region Admin
                    //info o racunu
                    sb.AppendLine(String.Format("Racun broj {0}. \\n Datum: {1}", invoice.BrojRacuna, invoice.DatumIzdavanja));
                    sb.AppendLine("");
                    sb.AppendLine(String.Format("Komentar narudžbe: '{0}' ", invoice.KomentarNarudzbe));
                    sb.AppendLine("");
                    sb.AppendLine("");

                    //info o kupcu
                    sb.AppendLine(String.Format("Kupac: {0} {1}", buyer.Ime, buyer.Prezime));
                    sb.AppendLine(String.Format("Kontakt: {0} {1}", buyer.Kontakt, buyer.Email));
                    sb.AppendLine(String.Format("Adresa: {0} {1}, {2} {3}, Hrvatska", buyer.Ulica, buyer.KucniBroj, buyer.PostanskiBroj, buyer.Grad));

                    //ispis proizvoda
                    sb.AppendLine("");
                    sb.AppendLine("");
                    sb.AppendLine("Proizvodi: ");
                    foreach (var item in invoice.Stavke.ToList())
                    {
                        sb.AppendLine(String.Format("   {0}x {1} po cjieni od {2} HRK", item.Kolicina, item.Proizvod.Naziv, item.CijenaPoKomadu));
                    }
                    sb.AppendLine("");
                    sb.AppendLine("");

                    //popust kod
                    if (discountCode != null)
                    {
                        sb.AppendLine("Korišen je kupon kod (" + discount.PopustKod + ") za popust od " + discount.PopustUpostocima + "%!");
                        sb.AppendLine("");
                        sb.AppendLine("");
                    }

                    sb.AppendLine("Način plaćanja: ");
                    //nacin placanja
                    if (paymentGateway == "CorvusPay")
                    {
                        sb.Append(" CorvusPay - Internet bankarstvo.");
                    }
                    else if (paymentGateway == "OnDelivery")
                    {
                        sb.Append(" plaćanje pouzećem.");
                    }
                    sb.AppendLine("");
                    sb.AppendLine("");
                    sb.AppendLine("Ovo je automatski generirana poruka. Molimo te da ne odgovaraš na ovu poruku.");

                    await _mailService.SendEmailAsync(new Message(mailboxAddresses,
                        string.Format("Nova narudžba ({0})!", invoice.BrojRacuna),
                        sb.ToString(),
                        null));
                    #endregion
                    break;

                case AccountRoles.User:
                    var builder = new BodyBuilder();
                    builder.HtmlBody = getOrderConfirmedTemplateHtml();

                    sb.Append(builder.HtmlBody.ToString());
                    sb.Replace("[ime]", buyer.Ime);
                    sb.Replace("[brojNarudzbe]", invoice.BrojRacuna.ToString());

                    String paymentMethod;
                    switch (paymentGateway)
                    {
                        case "OnDelivery":
                            paymentMethod = "Plaćanje pouzećem";
                            break;

                        case "CorvusPay":
                            paymentMethod = "CorvusPay - Internet plaćanje";
                            break;

                        default:
                            paymentMethod = "Ostalo";
                            break;
                    }
                    sb.Replace("[nacinPlacanja]", paymentMethod);

                    String products = "";
                    var productsPrice = new Decimal(0);
                    foreach (var item in invoice.Stavke.ToList())
                    {
                        String productInfo = String.Format("{0}x {1} po cijeni od {2}kn", item.Kolicina, item.Proizvod.Naziv, Math.Round(item.CijenaPoKomadu, 2).ToString());
                        products += (productInfo + "<br>");
                        productsPrice += item.UkupnaCijena;
                    }
                    sb.Replace("[proizvodi]", products);

                    if (discount != null)
                    {
                        sb.Replace("[kuponKod]", discount.PopustKod + "(" + discount.PopustUpostocima.ToString() + "%)");
                    }
                    else
                    {
                        sb.Replace("[kuponKod]", "Nije korišten (0%)");
                    }

                    sb.Replace("[cijenaProizvoda]", Math.Round(productsPrice, 2).ToString());
                    sb.Replace("[cijenaPaketa]", Math.Round(shippingPrice, 2).ToString());
                    sb.Replace("[ukupnaCijena]", Math.Round((productsPrice + shippingPrice), 2).ToString());

                    #region
                    /*
                    sb.AppendLine(String.Format("Pozdrav {0} {1}!", buyer.Ime, buyer.Prezime));
                    sb.AppendLine(String.Format("Uspješno smo zaprimili narudžbu koju ste napravili. Javit ćemo Vam kada Vaš paket krene prema adresi dostave koju ste unijeli."));
                    sb.AppendLine("");
                    sb.AppendLine("");

                    //info o kupcu
                    sb.AppendLine(String.Format("Naručitelj: {0} {1}", buyer.Ime, buyer.Prezime));
                    sb.AppendLine(String.Format("Kontakt: {0} {1}", buyer.Kontakt, buyer.Email));
                    sb.AppendLine(String.Format("Adresa: {0} {1}, {2} {3}, Hrvatska", buyer.Ulica, buyer.KucniBroj, buyer.PostanskiBroj, buyer.Grad));
                    sb.AppendLine("");
                    sb.AppendLine("");

                    sb.AppendLine(String.Format("Proizvode koje ste naručili su slijedeći: "));

                    var totalPrice = new Decimal(0);
                    foreach (var item in invoice.Stavke.ToList())
                    {
                        sb.AppendLine(String.Format("   {0}x {1} po cjieni od {2} HRK", item.Kolicina, item.Proizvod.Naziv, item.CijenaPoKomadu));
                        totalPrice += item.UkupnaCijena;
                    }
                    sb.AppendLine("");
                    sb.AppendLine("");

                    //popust kod
                    if (discountCode != null)
                    {
                        sb.AppendLine("Korišen je kupon kod (" + order.DiscountCode + ") za popust od " + discountCode.PopustUpostocima + "%!");
                        sb.AppendLine("");
                        sb.AppendLine("");
                    }

                    sb.Append("Za način plaćanja ste odabrali: ");
                    if (order.PaymentModel.PaymentMethod == "CorvusPay")
                    {
                        sb.Append("CorvusPay kartični način plaćanja.");
                    }
                    else if (order.PaymentModel.PaymentMethod == "OnDelivery")
                    {
                        sb.Append("plaćanje pouzećem.");
                    }
                    sb.AppendLine("");
                    sb.AppendLine("");
                    sb.AppendLine(String.Format("Cijena svih proizvoda je {0} HRK, a cijena slanja paketa je {1}.", totalPrice, 30));
                    sb.AppendLine(String.Format("Sveukupan iznos koji moraš platiti je {0}.", totalPrice + 30));
                    sb.AppendLine("");
                    sb.AppendLine("");
                    sb.AppendLine("Nadamo se ponovnoj suradnji! Tvoj Cascadus tim.");
                    sb.AppendLine("");
                    sb.AppendLine("Ovo je automatski generirana poruka. Molimo te da ne odgovaraš na ovu poruku.");
                    */
                    #endregion

                    mailboxAddresses.Add(MailboxAddress.Parse(buyer.Email));
                    var msg = new Message(mailboxAddresses,
                        String.Format("Cascadus - Narudžba ({0}) uspješno zaprimljena.", invoice.BrojRacuna.ToString()),
                        sb.ToString(),
                        null);
                    await _mailService.SendEmailAsync(msg);
                    break;
                default:
                    break;
            }
        }

        private String getOrderConfirmedTemplateHtml()
        {
            var base64 = "PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsIC8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvRFREL3hodG1sMS10cmFuc2l0aW9uYWwuZHRkIj48aHRtbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgeG1sbnM6dj0idXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwiIHhtbG5zOm89InVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOm9mZmljZSI+PGhlYWQ+IDwhLS1baWYgZ3RlIG1zbyA5XT48eG1sPjxvOk9mZmljZURvY3VtZW50U2V0dGluZ3M+PG86QWxsb3dQTkcvPjxvOlBpeGVsc1BlckluY2g+OTY8L286UGl4ZWxzUGVySW5jaD48L286T2ZmaWNlRG9jdW1lbnRTZXR0aW5ncz48L3htbD48IVtlbmRpZl0tLT48bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LVR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD11dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCI+IDwhLS1baWYgIW1zb10+PCEtLT48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPiA8IS0tPCFbZW5kaWZdLS0+PHRpdGxlPjwvdGl0bGU+IDwhLS1baWYgIW1zb10+PCEtLT48bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvIiByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIj48bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvIiByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIj4gPCEtLTwhW2VuZGlmXS0tPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Ym9keXttYXJnaW46MDtwYWRkaW5nOjB9dGFibGUsdGQsdHJ7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX0qe2xpbmUtaGVpZ2h0OmluaGVyaXR9YVt4LWFwcGxlLWRhdGEtZGV0ZWN0b3JzPXRydWVde2NvbG9yOmluaGVyaXQgIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50fTwvc3R5bGU+PHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ibWVkaWEtcXVlcnkiPkBtZWRpYSAobWF4LXdpZHRoOiA2NzBweCl7LmJsb2NrLWdyaWQsLmNvbHttaW4td2lkdGg6MzIwcHggIWltcG9ydGFudDttYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudH0uYmxvY2stZ3JpZHt3aWR0aDoxMDAlICFpbXBvcnRhbnR9LmNvbHt3aWR0aDoxMDAlICFpbXBvcnRhbnR9LmNvbF9jb250e21hcmdpbjowIGF1dG99aW1nLmZ1bGx3aWR0aCxpbWcuZnVsbHdpZHRoT25Nb2JpbGV7bWF4LXdpZHRoOjEwMCUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbHttaW4td2lkdGg6MCAhaW1wb3J0YW50O2Rpc3BsYXk6dGFibGUtY2VsbCAhaW1wb3J0YW50fS5uby1zdGFjay50d28tdXAgLmNvbHt3aWR0aDo1MCUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbC5udW0ye3dpZHRoOjE2LjYlICFpbXBvcnRhbnR9Lm5vLXN0YWNrIC5jb2wubnVtM3t3aWR0aDoyNSUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbC5udW00e3dpZHRoOjMzJSAhaW1wb3J0YW50fS5uby1zdGFjayAuY29sLm51bTV7d2lkdGg6NDEuNiUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbC5udW02e3dpZHRoOjUwJSAhaW1wb3J0YW50fS5uby1zdGFjayAuY29sLm51bTd7d2lkdGg6NTguMyUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbC5udW04e3dpZHRoOjY2LjYlICFpbXBvcnRhbnR9Lm5vLXN0YWNrIC5jb2wubnVtOXt3aWR0aDo3NSUgIWltcG9ydGFudH0ubm8tc3RhY2sgLmNvbC5udW0xMHt3aWR0aDo4My4zJSAhaW1wb3J0YW50fS52aWRlby1ibG9ja3ttYXgtd2lkdGg6bm9uZSAhaW1wb3J0YW50fS5tb2JpbGVfaGlkZXttaW4taGVpZ2h0OjBweDttYXgtaGVpZ2h0OjBweDttYXgtd2lkdGg6MHB4O2Rpc3BsYXk6bm9uZTtvdmVyZmxvdzpoaWRkZW47Zm9udC1zaXplOjBweH0uZGVza3RvcF9oaWRle2Rpc3BsYXk6YmxvY2sgIWltcG9ydGFudDttYXgtaGVpZ2h0Om5vbmUgIWltcG9ydGFudH19PC9zdHlsZT48L2hlYWQ+PGJvZHkgY2xhc3M9ImNsZWFuLWJvZHkiIHN0eWxlPSJtYXJnaW46IDA7IHBhZGRpbmc6IDA7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDsiPiA8IS0tW2lmIElFXT48ZGl2IGNsYXNzPSJpZS1icm93c2VyIj48IVtlbmRpZl0tLT48dGFibGUgY2xhc3M9Im5sLWNvbnRhaW5lciIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IG1pbi13aWR0aDogMzIwcHg7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDsgd2lkdGg6IDEwMCU7IiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHJvbGU9InByZXNlbnRhdGlvbiIgd2lkdGg9IjEwMCUiIGJnY29sb3I9IiNmZmNjMDAiIHZhbGlnbj0idG9wIj48dGJvZHk+PHRyIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyIgdmFsaWduPSJ0b3AiPjx0ZCBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHI+PHRkIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjMDAiPjwhW2VuZGlmXS0tPjxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjxkaXYgY2xhc3M9ImJsb2NrLWdyaWQgIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgd29yZC13cmFwOiBicmVhay13b3JkOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBNYXJnaW46IDAgYXV0bzsgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDI0NzsiPjxkaXYgc3R5bGU9ImJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ZGlzcGxheTogdGFibGU7d2lkdGg6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjx0cj48dGQgYWxpZ249ImNlbnRlciI+PHRhYmxlIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0id2lkdGg6NjUwcHgiPjx0ciBjbGFzcz0ibGF5b3V0LWZ1bGwtd2lkdGgiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDciPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjx0ZCBhbGlnbj0iY2VudGVyIiB3aWR0aD0iNjUwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3O3dpZHRoOjY1MHB4OyBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IiB2YWxpZ249InRvcCI+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtMTIiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogNjUwcHg7Ij48ZGl2IGNsYXNzPSJjb2xfY29udCIgc3R5bGU9IndpZHRoOjEwMCUgIWltcG9ydGFudDsiPiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48ZGl2IHN0eWxlPSJib3JkZXItdG9wOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7Ij4gPCEtLTwhW2VuZGlmXS0tPjxkaXYgY2xhc3M9Im1vYmlsZV9oaWRlIj48dGFibGUgY2xhc3M9ImRpdmlkZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgbWluLXdpZHRoOiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyIgcm9sZT0icHJlc2VudGF0aW9uIiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgY2xhc3M9ImRpdmlkZXJfaW5uZXIiIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBtaW4td2lkdGg6IDEwMCU7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IHBhZGRpbmctdG9wOiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4OyBwYWRkaW5nLWJvdHRvbTogMTVweDsgcGFkZGluZy1sZWZ0OiAxNXB4OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSBjbGFzcz0iZGl2aWRlcl9jb250ZW50IiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjEwMCUiIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLWxzcGFjZTogMHB0OyBtc28tdGFibGUtcnNwYWNlOiAwcHQ7IGJvcmRlci10b3A6IDBweCBzb2xpZCAjQkJCQkJCOyB3aWR0aDogMTAwJTsiIGFsaWduPSJjZW50ZXIiIHJvbGU9InByZXNlbnRhdGlvbiIgdmFsaWduPSJ0b3AiPjx0Ym9keT48dHIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiB0b3A7IiB2YWxpZ249InRvcCI+PHRkIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyIgdmFsaWduPSJ0b3AiPjxzcGFuPjwvc3Bhbj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PC9kaXY+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjwvZGl2PiA8IS0tPCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PGRpdiBjbGFzcz0iYmxvY2stZ3JpZCAiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IE1hcmdpbjogMCBhdXRvOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkMjQ3OyI+PGRpdiBzdHlsZT0iYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtkaXNwbGF5OiB0YWJsZTt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PHRyPjx0ZCBhbGlnbj0iY2VudGVyIj48dGFibGUgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJ3aWR0aDo2NTBweCI+PHRyIGNsYXNzPSJsYXlvdXQtZnVsbC13aWR0aCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NyI+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRkIGFsaWduPSJjZW50ZXIiIHdpZHRoPSI2NTAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7d2lkdGg6NjUwcHg7IGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsiIHZhbGlnbj0idG9wIj48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHI+PHRkIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjBweDsiPjwhW2VuZGlmXS0tPjxkaXYgY2xhc3M9ImNvbCBudW0xMiIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IGRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA2NTBweDsiPjxkaXYgY2xhc3M9ImNvbF9jb250IiBzdHlsZT0id2lkdGg6MTAwJSAhaW1wb3J0YW50OyI+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjxkaXYgc3R5bGU9ImJvcmRlci10b3A6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjBweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsiPiA8IS0tPCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iaW1nLWNvbnRhaW5lciBjZW50ZXIgYXV0b3dpZHRoIiBhbGlnbj0iY2VudGVyIiBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4O3BhZGRpbmctbGVmdDogMHB4OyI+IDwhLS1baWYgbXNvXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHIgc3R5bGU9ImxpbmUtaGVpZ2h0OjBweCI+PHRkIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7cGFkZGluZy1sZWZ0OiAwcHg7IiBhbGlnbj0iY2VudGVyIj48IVtlbmRpZl0tLT48aW1nIGNsYXNzPSJjZW50ZXIgYXV0b3dpZHRoIiBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIHNyYz0iaHR0cHM6Ly9kMW9jbzR6MnoxZmh3cC5jbG91ZGZyb250Lm5ldC90ZW1wbGF0ZXMvZGVmYXVsdC8zMzUxL1RvcC5wbmciIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IGhlaWdodDogYXV0bzsgYm9yZGVyOiAwOyB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiA2NTBweDsgZGlzcGxheTogYmxvY2s7IiB3aWR0aD0iNjUwIj4gPCEtLVtpZiBtc29dPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjwvZGl2PiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48L2Rpdj4gPCEtLTwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjxkaXYgY2xhc3M9ImJsb2NrLWdyaWQgbWl4ZWQtdHdvLXVwIG5vLXN0YWNrIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgd29yZC13cmFwOiBicmVhay13b3JkOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBNYXJnaW46IDAgYXV0bzsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsiPjxkaXYgc3R5bGU9ImJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ZGlzcGxheTogdGFibGU7d2lkdGg6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmOyI+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjx0cj48dGQgYWxpZ249ImNlbnRlciI+PHRhYmxlIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0id2lkdGg6NjUwcHgiPjx0ciBjbGFzcz0ibGF5b3V0LWZ1bGwtd2lkdGgiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYiPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjx0ZCBhbGlnbj0iY2VudGVyIiB3aWR0aD0iMjE2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO3dpZHRoOjIxNnB4OyBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IiB2YWxpZ249InRvcCI+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTo1cHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtNCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7IG1heC13aWR0aDogMzIwcHg7IG1pbi13aWR0aDogMjE2cHg7IHdpZHRoOiAyMTZweDsiPjxkaXYgY2xhc3M9ImNvbF9jb250IiBzdHlsZT0id2lkdGg6MTAwJSAhaW1wb3J0YW50OyI+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjxkaXYgc3R5bGU9ImJvcmRlci10b3A6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjVweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsiPiA8IS0tPCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iaW1nLWNvbnRhaW5lciBjZW50ZXIgYXV0b3dpZHRoIiBhbGlnbj0iY2VudGVyIiBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4O3BhZGRpbmctbGVmdDogMHB4OyI+IDwhLS1baWYgbXNvXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHIgc3R5bGU9ImxpbmUtaGVpZ2h0OjBweCI+PHRkIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7cGFkZGluZy1sZWZ0OiAwcHg7IiBhbGlnbj0iY2VudGVyIj48IVtlbmRpZl0tLT48aW1nIGNsYXNzPSJjZW50ZXIgYXV0b3dpZHRoIiBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIHNyYz0iaHR0cHM6Ly9kMTVrMmQxMXI2dDZybC5jbG91ZGZyb250Lm5ldC9wdWJsaWMvdXNlcnMvSW50ZWdyYXRvcnMvQmVlUHJvQWdlbmN5LzY2Nzc2NV82NTAxMzcvb25saW5lbG9nb21ha2VyLTExMzAyMC0xMjM1LTU2MDQtNTAwLmpwZyIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgaGVpZ2h0OiBhdXRvOyBib3JkZXI6IDA7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDIxNnB4OyBkaXNwbGF5OiBibG9jazsiIHdpZHRoPSIyMTYiPiA8IS0tW2lmIG1zb10+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PC9kaXY+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjwvZGl2PiA8IS0tPCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48dGQgYWxpZ249ImNlbnRlciIgd2lkdGg9IjQzMyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjt3aWR0aDo0MzNweDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDIwcHg7IHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTo1cHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtOCIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7IG1heC13aWR0aDogMzIwcHg7IG1pbi13aWR0aDogNDMycHg7IHdpZHRoOiA0MzNweDsiPjxkaXYgY2xhc3M9ImNvbF9jb250IiBzdHlsZT0id2lkdGg6MTAwJSAhaW1wb3J0YW50OyI+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjxkaXYgc3R5bGU9ImJvcmRlci10b3A6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjVweDsgcGFkZGluZy1yaWdodDogMjBweDsgcGFkZGluZy1sZWZ0OiAyMHB4OyI+IDwhLS08IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJidXR0b24tY29udGFpbmVyIiBhbGlnbj0icmlnaHQiIHN0eWxlPSJwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3BhZGRpbmctbGVmdDoxMHB4OyI+IDwhLS1baWYgbXNvXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0iYm9yZGVyLXNwYWNpbmc6IDA7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IG1zby10YWJsZS1sc3BhY2U6MHB0OyBtc28tdGFibGUtcnNwYWNlOjBwdDsiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMTBweDsgcGFkZGluZy1sZWZ0OiAxMHB4IiBhbGlnbj0icmlnaHQiPjx2OnJvdW5kcmVjdCB4bWxuczp2PSJ1cm46c2NoZW1hcy1taWNyb3NvZnQtY29tOnZtbCIgeG1sbnM6dz0idXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTpvZmZpY2U6d29yZCIgaHJlZj0idGVsOiszODU5ODcxMzIyOCIgc3R5bGU9ImhlaWdodDozNy41cHQ7d2lkdGg6MzA5Ljc1cHQ7di10ZXh0LWFuY2hvcjptaWRkbGU7IiBhcmNzaXplPSI4JSIgc3Ryb2tld2VpZ2h0PSIwLjc1cHQiIHN0cm9rZWNvbG9yPSIjMTQxNDFBIiBmaWxsPSJmYWxzZSI+PHc6YW5jaG9ybG9jay8+PHY6dGV4dGJveCBpbnNldD0iMCwwLDAsMCI+PGNlbnRlciBzdHlsZT0iY29sb3I6IzE0MTQxYTsgZm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxMnB4Ij48IVtlbmRpZl0tLT48YSBocmVmPSJ0ZWw6KzM4NTk4NzEzMjI4IiB0YXJnZXQ9Il9ibGFuayIgc3R5bGU9Ii13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGNvbG9yOiAjMTQxNDFhOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogNHB4OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDsgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7IHdpZHRoOiBhdXRvOyB3aWR0aDogYXV0bzsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxNDE0MUE7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDE0MUE7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTQxNDFBOyBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxNDE0MUE7IHBhZGRpbmctdG9wOiAwcHg7IHBhZGRpbmctYm90dG9tOiAwcHg7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgQXJpYWwsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgdGV4dC1hbGlnbjogY2VudGVyOyBtc28tYm9yZGVyLWFsdDogbm9uZTsgd29yZC1icmVhazoga2VlcC1hbGw7Ij48c3BhbiBzdHlsZT0icGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O2ZvbnQtc2l6ZToxMnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xldHRlci1zcGFjaW5nOnVuZGVmaW5lZDsiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAyOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBtc28tbGluZS1oZWlnaHQtYWx0OiAyNHB4OyI+VWtvbGlrbyBpbWF0ZSBkb2RhdG5paCBwaXRhbmphLCBrb250YWt0aXJhanRlIG5hcyBuYSBicm9qIDA5OC83MTMtMjI4IGlsaSBuYSBlbWFpbDogcG9kcnNrYUBjYXNjYWR1cy5ocjwvc3Bhbj48L3NwYW4+PC9hPiA8IS0tW2lmIG1zb10+PC9jZW50ZXI+PC92OnRleHRib3g+PC92OnJvdW5kcmVjdD48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48ZGl2IGNsYXNzPSJibG9jay1ncmlkIHR3by11cCIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtd3JhcDogYnJlYWstd29yZDsgd29yZC1icmVhazogYnJlYWstd29yZDsgTWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7Ij48ZGl2IHN0eWxlPSJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZmZmZjsiPiA8IS0tW2lmIChtc28pfChJRSldPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48dHI+PHRkIGFsaWduPSJjZW50ZXIiPjx0YWJsZSBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9IndpZHRoOjY1MHB4Ij48dHIgY2xhc3M9ImxheW91dC1mdWxsLXdpZHRoIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmIj48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGQgYWxpZ249ImNlbnRlciIgd2lkdGg9IjMyNSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjt3aWR0aDozMjVweDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7IHBhZGRpbmctdG9wOjBweDsgcGFkZGluZy1ib3R0b206MHB4OyI+PCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iY29sIG51bTYiIHN0eWxlPSJkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBtYXgtd2lkdGg6IDMyMHB4OyBtaW4td2lkdGg6IDMyNHB4OyB3aWR0aDogMzI1cHg7Ij48ZGl2IGNsYXNzPSJjb2xfY29udCIgc3R5bGU9IndpZHRoOjEwMCUgIWltcG9ydGFudDsiPiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48ZGl2IHN0eWxlPSJib3JkZXItdG9wOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7Ij4gPCEtLTwhW2VuZGlmXS0tPiA8IS0tW2lmIG1zb10+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMTBweDsgcGFkZGluZy1sZWZ0OiAxMHB4OyBwYWRkaW5nLXRvcDogMTBweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZiI+PCFbZW5kaWZdLS0+PGRpdiBzdHlsZT0iY29sb3I6IzM5M2Q0Nztmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjI7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1ib3R0b206MTBweDtwYWRkaW5nLWxlZnQ6MTBweDsiPjxkaXYgY2xhc3M9InR4dFRpbnlNY2Utd3JhcHBlciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiAxLjI7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMzOTNkNDc7IGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTRweDsiPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTdweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPjxzdHJvbmc+PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsiPiZuYnNwOyAmbmJzcDs8c3BhbiBzdHlsZT0iY29sb3I6ICMwMDAwMDA7IGZvbnQtc2l6ZTogMjJweDsiPiBQb3pkcmF2IFtpbWVdICZuYnNwOzwvc3Bhbj48L3NwYW4+PC9zdHJvbmc+PC9wPjwvZGl2PjwvZGl2PiA8IS0tW2lmIG1zb10+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PHRhYmxlIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgcm9sZT0icHJlc2VudGF0aW9uIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsiIHZhbGlnbj0idG9wIj48dHIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiB0b3A7IiB2YWxpZ249InRvcCI+PHRkIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBwYWRkaW5nLWJvdHRvbTogMTBweDsgcGFkZGluZy1sZWZ0OiAyNXB4OyBwYWRkaW5nLXJpZ2h0OiAyNXB4OyBwYWRkaW5nLXRvcDogMTBweDsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsiIHdpZHRoPSIxMDAlIiBhbGlnbj0iY2VudGVyIiB2YWxpZ249InRvcCI+PGgxIHN0eWxlPSJjb2xvcjojMDAwMDAwO2RpcmVjdGlvbjpsdHI7Zm9udC1mYW1pbHk6J051bml0bycsIEFyaWFsLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjM4cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2xldHRlci1zcGFjaW5nOm5vcm1hbDtsaW5lLWhlaWdodDoxMjAlO3RleHQtYWxpZ246bGVmdDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOyI+PHN0cm9uZz5WYcWhYSBuYXJ1ZMW+YmEgKFticm9qTmFydWR6YmVdKSBqZSB1c3BqZcWhbm8gcHJvdmVkZW5hPC9zdHJvbmc+PC9oMT48L3RkPjwvdHI+PC90YWJsZT4gPCEtLVtpZiBtc29dPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDI1cHg7IHBhZGRpbmctbGVmdDogMjVweDsgcGFkZGluZy10b3A6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAyMHB4OyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWYiPjwhW2VuZGlmXS0tPjxkaXYgc3R5bGU9ImNvbG9yOiMzOTNkNDc7Zm9udC1mYW1pbHk6J051bml0bycsIEFyaWFsLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS4yO3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1yaWdodDoyNXB4O3BhZGRpbmctYm90dG9tOjIwcHg7cGFkZGluZy1sZWZ0OjI1cHg7Ij48ZGl2IGNsYXNzPSJ0eHRUaW55TWNlLXdyYXBwZXIiIHN0eWxlPSJsaW5lLWhlaWdodDogMS4yOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgQXJpYWwsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgY29sb3I6ICMzOTNkNDc7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE0cHg7Ij48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDIycHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgQXJpYWwsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMjZweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6IDIycHg7IGNvbG9yOiAjMDAwMDAwOyI+SmF2aXQgY2VtbyBWYW0ga2FkYSBWYcWhIHBha2V0IGtyZW5lIHByZW1hIGFkcmVzaSBkb3N0YXZlIGtvanUgc3RlIHVuaWplbGkuPC9zcGFuPjwvcD48L2Rpdj48L2Rpdj4gPCEtLVtpZiBtc29dPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjx0YWJsZSBjbGFzcz0iZGl2aWRlciIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBzdHlsZT0idGFibGUtbGF5b3V0OiBmaXhlZDsgdmVydGljYWwtYWxpZ246IHRvcDsgYm9yZGVyLXNwYWNpbmc6IDA7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IG1zby10YWJsZS1sc3BhY2U6IDBwdDsgbXNvLXRhYmxlLXJzcGFjZTogMHB0OyBtaW4td2lkdGg6IDEwMCU7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IiByb2xlPSJwcmVzZW50YXRpb24iIHZhbGlnbj0idG9wIj48dGJvZHk+PHRyIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyIgdmFsaWduPSJ0b3AiPjx0ZCBjbGFzcz0iZGl2aWRlcl9pbm5lciIgc3R5bGU9IndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IG1pbi13aWR0aDogMTAwJTsgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgcGFkZGluZy10b3A6IDI1cHg7IHBhZGRpbmctcmlnaHQ6IDI1cHg7IHBhZGRpbmctYm90dG9tOiAyNXB4OyBwYWRkaW5nLWxlZnQ6IDI1cHg7IiB2YWxpZ249InRvcCI+PHRhYmxlIGNsYXNzPSJkaXZpZGVyX2NvbnRlbnQiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNCQkJCQkI7IHdpZHRoOiAxMDAlOyIgYWxpZ249ImNlbnRlciIgcm9sZT0icHJlc2VudGF0aW9uIiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgc3R5bGU9IndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IiB2YWxpZ249InRvcCI+PHNwYW4+PC9zcGFuPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjx0ZCBhbGlnbj0iY2VudGVyIiB3aWR0aD0iMzI1IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO3dpZHRoOjMyNXB4OyBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IiB2YWxpZ249InRvcCI+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtNiIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7IG1heC13aWR0aDogMzIwcHg7IG1pbi13aWR0aDogMzI0cHg7IHdpZHRoOiAzMjVweDsiPjxkaXYgY2xhc3M9ImNvbF9jb250IiBzdHlsZT0id2lkdGg6MTAwJSAhaW1wb3J0YW50OyI+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjxkaXYgc3R5bGU9ImJvcmRlci10b3A6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjBweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsiPiA8IS0tPCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iaW1nLWNvbnRhaW5lciBjZW50ZXIgYXV0b3dpZHRoIiBhbGlnbj0iY2VudGVyIj4gPCEtLVtpZiBtc29dPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0ciBzdHlsZT0ibGluZS1oZWlnaHQ6MHB4Ij48dGQgc3R5bGU9IiIgYWxpZ249ImNlbnRlciI+PCFbZW5kaWZdLS0+PGltZyBjbGFzcz0iY2VudGVyIGF1dG93aWR0aCIgYWxpZ249ImNlbnRlciIgYm9yZGVyPSIwIiBzcmM9Imh0dHBzOi8vbWVkaWExLmdpcGh5LmNvbS9tZWRpYS9kYU9Va2E2UGRTcnVYeTFacjIvZ2lwaHkuZ2lmP2NpZD0yMGViNGU5ZHhycm03ODh4djFwazFlMjh3cWY2NHVmY3FuODFxM2k5ZWl5ajVsemYmYW1wO3JpZD1naXBoeS5naWYmYW1wO2N0PXMiIGFsdD0iSW1hZ2UiIHRpdGxlPSJJbWFnZSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsgaGVpZ2h0OiBhdXRvOyBib3JkZXI6IDA7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDI4MHB4OyBkaXNwbGF5OiBibG9jazsiIHdpZHRoPSIyODAiPiA8IS0tW2lmIG1zb10+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PC9kaXY+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjwvZGl2PiA8IS0tPCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PGRpdiBjbGFzcz0iYmxvY2stZ3JpZCAiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IE1hcmdpbjogMCBhdXRvOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNWQ2OyI+PGRpdiBzdHlsZT0iYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtkaXNwbGF5OiB0YWJsZTt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY1ZDY7Ij4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PHRyPjx0ZCBhbGlnbj0iY2VudGVyIj48dGFibGUgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJ3aWR0aDo2NTBweCI+PHRyIGNsYXNzPSJsYXlvdXQtZnVsbC13aWR0aCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZjVkNiI+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRkIGFsaWduPSJjZW50ZXIiIHdpZHRoPSI2NTAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmY1ZDY7d2lkdGg6NjUwcHg7IGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsiIHZhbGlnbj0idG9wIj48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHI+PHRkIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjBweDsiPjwhW2VuZGlmXS0tPjxkaXYgY2xhc3M9ImNvbCBudW0xMiIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IGRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA2NTBweDsiPjxkaXYgY2xhc3M9ImNvbF9jb250IiBzdHlsZT0id2lkdGg6MTAwJSAhaW1wb3J0YW50OyI+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjxkaXYgc3R5bGU9ImJvcmRlci10b3A6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBwYWRkaW5nLXRvcDowcHg7IHBhZGRpbmctYm90dG9tOjBweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsiPiA8IS0tPCFbZW5kaWZdLS0+PHRhYmxlIGNsYXNzPSJkaXZpZGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjEwMCUiIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLWxzcGFjZTogMHB0OyBtc28tdGFibGUtcnNwYWNlOiAwcHQ7IG1pbi13aWR0aDogMTAwJTsgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiIHJvbGU9InByZXNlbnRhdGlvbiIgdmFsaWduPSJ0b3AiPjx0Ym9keT48dHIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiB0b3A7IiB2YWxpZ249InRvcCI+PHRkIGNsYXNzPSJkaXZpZGVyX2lubmVyIiBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsgbWluLXdpZHRoOiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyBwYWRkaW5nLXRvcDogMTBweDsgcGFkZGluZy1yaWdodDogMTBweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IHBhZGRpbmctbGVmdDogMTBweDsiIHZhbGlnbj0idG9wIj48dGFibGUgY2xhc3M9ImRpdmlkZXJfY29udGVudCIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBzdHlsZT0idGFibGUtbGF5b3V0OiBmaXhlZDsgdmVydGljYWwtYWxpZ246IHRvcDsgYm9yZGVyLXNwYWNpbmc6IDA7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IG1zby10YWJsZS1sc3BhY2U6IDBwdDsgbXNvLXRhYmxlLXJzcGFjZTogMHB0OyBib3JkZXItdG9wOiAwcHggc29saWQgI0JCQkJCQjsgd2lkdGg6IDEwMCU7IiBhbGlnbj0iY2VudGVyIiByb2xlPSJwcmVzZW50YXRpb24iIHZhbGlnbj0idG9wIj48dGJvZHk+PHRyIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyIgdmFsaWduPSJ0b3AiPjx0ZCBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiIHZhbGlnbj0idG9wIj48c3Bhbj48L3NwYW4+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPiA8IS0tW2lmIG1zb10+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMTBweDsgcGFkZGluZy1sZWZ0OiAxMHB4OyBwYWRkaW5nLXRvcDogMTBweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZiI+PCFbZW5kaWZdLS0+PGRpdiBzdHlsZT0iY29sb3I6IzM5M2Q0Nztmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjI7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1ib3R0b206MTBweDtwYWRkaW5nLWxlZnQ6MTBweDsiPjxkaXYgY2xhc3M9InR4dFRpbnlNY2Utd3JhcHBlciIgc3R5bGU9ImxpbmUtaGVpZ2h0OiAxLjI7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICMzOTNkNDc7IGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTRweDsiPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTlweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPjxzcGFuIHN0eWxlPSJjb2xvcjogIzAwMDAwMDsgZm9udC1zaXplOiAxNnB4OyI+PHN0cm9uZz5Qcm9penZvZGUga29qZSBzdGUgbmFydcSNaWxpIHN1IHNsamVkZcSHaTo8L3N0cm9uZz48L3NwYW4+PC9wPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTlweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPjxzcGFuIHN0eWxlPSJjb2xvcjogIzAwMDAwMDsgZm9udC1zaXplOiAxNnB4OyI+PHN0cm9uZz5bcHJvaXp2b2RpXTwvc3Ryb25nPjwvc3Bhbj48L3A+PHAgc3R5bGU9Im1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS4yOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBtc28tbGluZS1oZWlnaHQtYWx0OiAxN3B4OyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwOyI+Jm5ic3A7PC9wPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTdweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPiZuYnNwOzwvcD48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE5cHg7IG1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7Ij48c3BhbiBzdHlsZT0iY29sb3I6ICMwMDAwMDA7IGZvbnQtc2l6ZTogMTZweDsiPjxzdHJvbmc+WmEgbmHEjWluIHBsYcSHYW5qYSBzdGUgb2RhYnJhbGk6W25hY2luUGxhY2FuamFdPC9zdHJvbmc+PC9zcGFuPjwvcD48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE3cHg7IG1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7Ij4mbmJzcDs8L3A+PHAgc3R5bGU9Im1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS4yOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBtc28tbGluZS1oZWlnaHQtYWx0OiAxN3B4OyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwOyI+Jm5ic3A7PC9wPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTlweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPjxzcGFuIHN0eWxlPSJjb2xvcjogIzAwMDAwMDsgZm9udC1zaXplOiAxNnB4OyI+PHN0cm9uZz5LdXBvbiBrb2Q6W2t1cG9uS29kXTwvc3Ryb25nPjwvc3Bhbj48L3A+PHAgc3R5bGU9Im1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS4yOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBtc28tbGluZS1oZWlnaHQtYWx0OiAxN3B4OyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwOyI+Jm5ic3A7PC9wPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTdweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPiZuYnNwOzwvcD48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE5cHg7IG1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7Ij48c3BhbiBzdHlsZT0iY29sb3I6ICMwMDAwMDA7IGZvbnQtc2l6ZTogMTZweDsiPjxzdHJvbmc+Q2lqZW5hIHN2aWggcHJvaXp2b2RhIGplIFtjaWplbmFQcm9penZvZGFda24sIGEgY2lqZW5hIHNsYW5qYSBwYWtldGEgamUgW2NpamVuYVBha2V0YV1rbjwvc3Ryb25nPjwvc3Bhbj48L3A+PHAgc3R5bGU9Im1hcmdpbjogMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS4yOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBtc28tbGluZS1oZWlnaHQtYWx0OiAxN3B4OyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwOyI+Jm5ic3A7PC9wPjxwIHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuMjsgd29yZC1icmVhazogYnJlYWstd29yZDsgbXNvLWxpbmUtaGVpZ2h0LWFsdDogMTdweDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDsiPiZuYnNwOzwvcD48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDIwcHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IG1zby1saW5lLWhlaWdodC1hbHQ6IDI0cHg7IG1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7Ij48c3BhbiBzdHlsZT0iY29sb3I6ICMwMDAwMDA7IGZvbnQtc2l6ZTogMjBweDsiPjxzdHJvbmc+U3ZldWt1cGFuIGl6bm9zIGtvamkgbW9yYcWhIHBsYXRpdGkgamUgW3VrdXBuYUNpamVuYV1rbjwvc3Ryb25nPjwvc3Bhbj48L3A+PC9kaXY+PC9kaXY+IDwhLS1baWYgbXNvXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48ZGl2IGNsYXNzPSJibG9jay1ncmlkICIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtd3JhcDogYnJlYWstd29yZDsgd29yZC1icmVhazogYnJlYWstd29yZDsgTWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZDY7Ij48ZGl2IHN0eWxlPSJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjVkNjsiPiA8IS0tW2lmIChtc28pfChJRSldPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48dHI+PHRkIGFsaWduPSJjZW50ZXIiPjx0YWJsZSBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9IndpZHRoOjY1MHB4Ij48dHIgY2xhc3M9ImxheW91dC1mdWxsLXdpZHRoIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmNWQ2Ij48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGQgYWxpZ249ImNlbnRlciIgd2lkdGg9IjY1MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZmZjVkNjt3aWR0aDo2NTBweDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7IHBhZGRpbmctdG9wOjBweDsgcGFkZGluZy1ib3R0b206MHB4OyI+PCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iY29sIG51bTEyIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDY1MHB4OyI+PGRpdiBjbGFzcz0iY29sX2NvbnQiIHN0eWxlPSJ3aWR0aDoxMDAlICFpbXBvcnRhbnQ7Ij4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PGRpdiBzdHlsZT0iYm9yZGVyLXRvcDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDowcHggc29saWQgdHJhbnNwYXJlbnQ7IHBhZGRpbmctdG9wOjBweDsgcGFkZGluZy1ib3R0b206MHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyI+IDwhLS08IVtlbmRpZl0tLT48dGFibGUgY2xhc3M9ImRpdmlkZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgbWluLXdpZHRoOiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyIgcm9sZT0icHJlc2VudGF0aW9uIiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgY2xhc3M9ImRpdmlkZXJfaW5uZXIiIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBtaW4td2lkdGg6IDEwMCU7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IHBhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMTBweDsgcGFkZGluZy1sZWZ0OiAxMHB4OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSBjbGFzcz0iZGl2aWRlcl9jb250ZW50IiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjEwMCUiIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLWxzcGFjZTogMHB0OyBtc28tdGFibGUtcnNwYWNlOiAwcHQ7IGJvcmRlci10b3A6IDBweCBzb2xpZCAjQkJCQkJCOyB3aWR0aDogMTAwJTsiIGFsaWduPSJjZW50ZXIiIHJvbGU9InByZXNlbnRhdGlvbiIgdmFsaWduPSJ0b3AiPjx0Ym9keT48dHIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiB0b3A7IiB2YWxpZ249InRvcCI+PHRkIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyIgdmFsaWduPSJ0b3AiPjxzcGFuPjwvc3Bhbj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+IDwhLS1baWYgKCFtc28pJighSUUpXT48IS0tPjwvZGl2PiA8IS0tPCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PC90ZD48L3RyPjwvdGFibGU+PC90ZD48L3RyPjwvdGFibGU+PCFbZW5kaWZdLS0+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PGRpdiBjbGFzcz0iYmxvY2stZ3JpZCAiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IE1hcmdpbjogMCBhdXRvOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyI+PGRpdiBzdHlsZT0iYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtkaXNwbGF5OiB0YWJsZTt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7Ij4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+PHRyPjx0ZCBhbGlnbj0iY2VudGVyIj48dGFibGUgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJ3aWR0aDo2NTBweCI+PHRyIGNsYXNzPSJsYXlvdXQtZnVsbC13aWR0aCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IzAwMDAwMCI+PCFbZW5kaWZdLS0+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRkIGFsaWduPSJjZW50ZXIiIHdpZHRoPSI2NTAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7d2lkdGg6NjUwcHg7IGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsiIHZhbGlnbj0idG9wIj48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIj48dHI+PHRkIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyBwYWRkaW5nLXRvcDoxMHB4OyBwYWRkaW5nLWJvdHRvbTo1cHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtMTIiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogNjUwcHg7Ij48ZGl2IGNsYXNzPSJjb2xfY29udCIgc3R5bGU9IndpZHRoOjEwMCUgIWltcG9ydGFudDsiPiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48ZGl2IHN0eWxlPSJib3JkZXItdG9wOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgcGFkZGluZy10b3A6MTBweDsgcGFkZGluZy1ib3R0b206NXB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyI+IDwhLS08IVtlbmRpZl0tLT48dGFibGUgY2xhc3M9ImRpdmlkZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgbWluLXdpZHRoOiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyIgcm9sZT0icHJlc2VudGF0aW9uIiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgY2xhc3M9ImRpdmlkZXJfaW5uZXIiIHN0eWxlPSJ3b3JkLWJyZWFrOiBicmVhay13b3JkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBtaW4td2lkdGg6IDEwMCU7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IHBhZGRpbmctdG9wOiAwcHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1ib3R0b206IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7IiB2YWxpZ249InRvcCI+PHRhYmxlIGNsYXNzPSJkaXZpZGVyX2NvbnRlbnQiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9InRhYmxlLWxheW91dDogZml4ZWQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IGJvcmRlci1zcGFjaW5nOiAwOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBtc28tdGFibGUtbHNwYWNlOiAwcHQ7IG1zby10YWJsZS1yc3BhY2U6IDBwdDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNCQkJCQkI7IHdpZHRoOiAxMDAlOyIgYWxpZ249ImNlbnRlciIgcm9sZT0icHJlc2VudGF0aW9uIiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgc3R5bGU9IndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IiB2YWxpZ249InRvcCI+PHNwYW4+PC9zcGFuPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48ZGl2IGNsYXNzPSJibG9jay1ncmlkICIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtd3JhcDogYnJlYWstd29yZDsgd29yZC1icmVhazogYnJlYWstd29yZDsgTWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7Ij48ZGl2IHN0eWxlPSJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6IzAwMDAwMDsiPiA8IS0tW2lmIChtc28pfChJRSldPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48dHI+PHRkIGFsaWduPSJjZW50ZXIiPjx0YWJsZSBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9IndpZHRoOjY1MHB4Ij48dHIgY2xhc3M9ImxheW91dC1mdWxsLXdpZHRoIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwIj48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGQgYWxpZ249ImNlbnRlciIgd2lkdGg9IjY1MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IzAwMDAwMDt3aWR0aDo2NTBweDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7IHBhZGRpbmctdG9wOjVweDsgcGFkZGluZy1ib3R0b206NXB4OyI+PCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iY29sIG51bTEyIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDY1MHB4OyI+PGRpdiBjbGFzcz0iY29sX2NvbnQiIHN0eWxlPSJ3aWR0aDoxMDAlICFpbXBvcnRhbnQ7Ij4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PGRpdiBzdHlsZT0iYm9yZGVyLXRvcDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDowcHggc29saWQgdHJhbnNwYXJlbnQ7IHBhZGRpbmctdG9wOjVweDsgcGFkZGluZy1ib3R0b206NXB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyI+IDwhLS08IVtlbmRpZl0tLT4gPCEtLVtpZiBtc29dPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDEwcHg7IHBhZGRpbmctbGVmdDogMTBweDsgcGFkZGluZy10b3A6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAxMHB4OyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWYiPjwhW2VuZGlmXS0tPjxkaXYgc3R5bGU9ImNvbG9yOiMzOTNkNDc7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS4yO3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7cGFkZGluZy1sZWZ0OjEwcHg7Ij48ZGl2IGNsYXNzPSJ0eHRUaW55TWNlLXdyYXBwZXIiIHN0eWxlPSJsaW5lLWhlaWdodDogMS4yOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMzkzZDQ3OyBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE0cHg7Ij48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE5cHg7IG1hcmdpbi10b3A6IDA7IG1hcmdpbi1ib3R0b206IDA7Ij48c3BhbiBzdHlsZT0iZm9udC1zaXplOiAxNnB4OyI+PHN0cm9uZz48c3BhbiBzdHlsZT0iY29sb3I6ICNmZmZmZmY7Ij5OYWRhbW8gc2UgcG9ub3Zub2ogc3VyYWRuamkuIFR2b2ogQ2FzY2FkdXMgdGltPC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L3A+PC9kaXY+PC9kaXY+IDwhLS1baWYgbXNvXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiBtc29dPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDVweDsgcGFkZGluZy1sZWZ0OiA1cHg7IHBhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMHB4OyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWYiPjwhW2VuZGlmXS0tPjxkaXYgc3R5bGU9ImNvbG9yOiM1NTU1NTU7Zm9udC1mYW1pbHk6J051bml0bycsIEFyaWFsLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1yaWdodDo1cHg7cGFkZGluZy1ib3R0b206MHB4O3BhZGRpbmctbGVmdDo1cHg7Ij48ZGl2IGNsYXNzPSJ0eHRUaW55TWNlLXdyYXBwZXIiIHN0eWxlPSJsaW5lLWhlaWdodDogMS41OyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgQXJpYWwsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgY29sb3I6ICM1NTU1NTU7IG1zby1saW5lLWhlaWdodC1hbHQ6IDE4cHg7Ij48cCBzdHlsZT0ibWFyZ2luOiAwOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxLjU7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBBcmlhbCwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBtc28tbGluZS1oZWlnaHQtYWx0OiAyMXB4OyBtYXJnaW4tdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAwOyI+PHNwYW4gc3R5bGU9ImNvbG9yOiAjZmZmZmZmOyI+Jm5ic3A7PC9zcGFuPjwvcD48L2Rpdj48L2Rpdj4gPCEtLVtpZiBtc29dPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjx0YWJsZSBjbGFzcz0ic29jaWFsX2ljb25zIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLWxzcGFjZTogMHB0OyBtc28tdGFibGUtcnNwYWNlOiAwcHQ7IiB2YWxpZ249InRvcCI+PHRib2R5Pjx0ciBzdHlsZT0idmVydGljYWwtYWxpZ246IHRvcDsiIHZhbGlnbj0idG9wIj48dGQgc3R5bGU9IndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHBhZGRpbmctdG9wOiAwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwcHg7IHBhZGRpbmctbGVmdDogMTBweDsiIHZhbGlnbj0idG9wIj48dGFibGUgY2xhc3M9InNvY2lhbF90YWJsZSIgYWxpZ249ImNlbnRlciIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLXRzcGFjZTogMDsgbXNvLXRhYmxlLXJzcGFjZTogMDsgbXNvLXRhYmxlLWJzcGFjZTogMDsgbXNvLXRhYmxlLWxzcGFjZTogMDsiIHZhbGlnbj0idG9wIj48dGJvZHk+PHRyIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRleHQtYWxpZ246IGNlbnRlcjsiIGFsaWduPSJjZW50ZXIiIHZhbGlnbj0idG9wIj48dGQgc3R5bGU9IndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHBhZGRpbmctYm90dG9tOiAwOyBwYWRkaW5nLXJpZ2h0OiAyLjVweDsgcGFkZGluZy1sZWZ0OiAyLjVweDsiIHZhbGlnbj0idG9wIj48YSBocmVmPSJodHRwczovL3d3dy5mYWNlYm9vay5jb20vQ2FzY2FkdXMtMTAxMDIxNTE4ODM3MTE3IiB0YXJnZXQ9Il9ibGFuayI+PGltZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHNyYz0iaHR0cHM6Ly9kMmZpNHJpNWRocHFkMS5jbG91ZGZyb250Lm5ldC9wdWJsaWMvcmVzb3VyY2VzL3NvY2lhbC1uZXR3b3Jrcy1pY29uLXNldHMvdC1vbmx5LWxvZ28td2hpdGUvZmFjZWJvb2tAMngucG5nIiBhbHQ9IkZhY2Vib29rIiB0aXRsZT0iRmFjZWJvb2siIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IGhlaWdodDogYXV0bzsgYm9yZGVyOiAwOyBkaXNwbGF5OiBibG9jazsiPjwvYT48L3RkPjx0ZCBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsgcGFkZGluZy1ib3R0b206IDA7IHBhZGRpbmctcmlnaHQ6IDIuNXB4OyBwYWRkaW5nLWxlZnQ6IDIuNXB4OyIgdmFsaWduPSJ0b3AiPjxhIGhyZWY9Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY2FzY2FkdXMxLyIgdGFyZ2V0PSJfYmxhbmsiPjxpbWcgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBzcmM9Imh0dHBzOi8vZDJmaTRyaTVkaHBxZDEuY2xvdWRmcm9udC5uZXQvcHVibGljL3Jlc291cmNlcy9zb2NpYWwtbmV0d29ya3MtaWNvbi1zZXRzL3Qtb25seS1sb2dvLXdoaXRlL2luc3RhZ3JhbUAyeC5wbmciIGFsdD0iSW5zdGFncmFtIiB0aXRsZT0iSW5zdGFncmFtIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lOyAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyBoZWlnaHQ6IGF1dG87IGJvcmRlcjogMDsgZGlzcGxheTogYmxvY2s7Ij48L2E+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48L2Rpdj4gPCEtLTwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjxkaXYgY2xhc3M9ImJsb2NrLWdyaWQgIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgd29yZC13cmFwOiBicmVhay13b3JkOyB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBNYXJnaW46IDAgYXV0bzsgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDI0NzsiPjxkaXYgc3R5bGU9ImJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ZGlzcGxheTogdGFibGU7d2lkdGg6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3OyI+IDwhLS1baWYgKG1zbyl8KElFKV0+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPjx0cj48dGQgYWxpZ249ImNlbnRlciI+PHRhYmxlIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgYm9yZGVyPSIwIiBzdHlsZT0id2lkdGg6NjUwcHgiPjx0ciBjbGFzcz0ibGF5b3V0LWZ1bGwtd2lkdGgiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDciPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjx0ZCBhbGlnbj0iY2VudGVyIiB3aWR0aD0iNjUwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3O3dpZHRoOjY1MHB4OyBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IiB2YWxpZ249InRvcCI+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6IDBweDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7Ij48IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJjb2wgbnVtMTIiIHN0eWxlPSJtaW4td2lkdGg6IDMyMHB4OyBtYXgtd2lkdGg6IDY1MHB4OyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogNjUwcHg7Ij48ZGl2IGNsYXNzPSJjb2xfY29udCIgc3R5bGU9IndpZHRoOjEwMCUgIWltcG9ydGFudDsiPiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48ZGl2IHN0eWxlPSJib3JkZXItdG9wOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgcGFkZGluZy10b3A6MHB4OyBwYWRkaW5nLWJvdHRvbTowcHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7Ij4gPCEtLTwhW2VuZGlmXS0tPjxkaXYgY2xhc3M9ImltZy1jb250YWluZXIgY2VudGVyIGF1dG93aWR0aCIgYWxpZ249ImNlbnRlciIgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDBweDtwYWRkaW5nLWxlZnQ6IDBweDsiPiA8IS0tW2lmIG1zb10+PHRhYmxlIHdpZHRoPSIxMDAlIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCI+PHRyIHN0eWxlPSJsaW5lLWhlaWdodDowcHgiPjx0ZCBzdHlsZT0icGFkZGluZy1yaWdodDogMHB4O3BhZGRpbmctbGVmdDogMHB4OyIgYWxpZ249ImNlbnRlciI+PCFbZW5kaWZdLS0+PGltZyBjbGFzcz0iY2VudGVyIGF1dG93aWR0aCIgYWxpZ249ImNlbnRlciIgYm9yZGVyPSIwIiBzcmM9Imh0dHBzOi8vZDFvY280ejJ6MWZod3AuY2xvdWRmcm9udC5uZXQvdGVtcGxhdGVzL2RlZmF1bHQvMzM1MS81NDg0MDhhZC00NDdmLTQxYzgtYWQ2OC1lZGQ0MTIyYmUzMmUucG5nIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lOyAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyBoZWlnaHQ6IGF1dG87IGJvcmRlcjogMDsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNjUwcHg7IGRpc3BsYXk6IGJsb2NrOyIgd2lkdGg9IjY1MCI+IDwhLS1baWYgbXNvXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PC90YWJsZT48IVtlbmRpZl0tLT48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48ZGl2IGNsYXNzPSJibG9jay1ncmlkICIgc3R5bGU9Im1pbi13aWR0aDogMzIwcHg7IG1heC13aWR0aDogNjUwcHg7IG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IHdvcmQtd3JhcDogYnJlYWstd29yZDsgd29yZC1icmVhazogYnJlYWstd29yZDsgTWFyZ2luOiAwIGF1dG87IGJhY2tncm91bmQtY29sb3I6ICNmZGQyNDc7Ij48ZGl2IHN0eWxlPSJib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6I2ZkZDI0NzsiPiA8IS0tW2lmIChtc28pfChJRSldPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZGQyNDc7Ij48dHI+PHRkIGFsaWduPSJjZW50ZXIiPjx0YWJsZSBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGJvcmRlcj0iMCIgc3R5bGU9IndpZHRoOjY1MHB4Ij48dHIgY2xhc3M9ImxheW91dC1mdWxsLXdpZHRoIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmRkMjQ3Ij48IVtlbmRpZl0tLT4gPCEtLVtpZiAobXNvKXwoSUUpXT48dGQgYWxpZ249ImNlbnRlciIgd2lkdGg9IjY1MCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6I2ZkZDI0Nzt3aWR0aDo2NTBweDsgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyIgdmFsaWduPSJ0b3AiPjx0YWJsZSB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiPjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OiAwcHg7IHBhZGRpbmctdG9wOjBweDsgcGFkZGluZy1ib3R0b206MHB4OyI+PCFbZW5kaWZdLS0+PGRpdiBjbGFzcz0iY29sIG51bTEyIiBzdHlsZT0ibWluLXdpZHRoOiAzMjBweDsgbWF4LXdpZHRoOiA2NTBweDsgZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDY1MHB4OyI+PGRpdiBjbGFzcz0iY29sX2NvbnQiIHN0eWxlPSJ3aWR0aDoxMDAlICFpbXBvcnRhbnQ7Ij4gPCEtLVtpZiAoIW1zbykmKCFJRSldPjwhLS0+PGRpdiBzdHlsZT0iYm9yZGVyLXRvcDowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OjBweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTowcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDowcHggc29saWQgdHJhbnNwYXJlbnQ7IHBhZGRpbmctdG9wOjBweDsgcGFkZGluZy1ib3R0b206MHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IHBhZGRpbmctbGVmdDogMHB4OyI+IDwhLS08IVtlbmRpZl0tLT48ZGl2IGNsYXNzPSJtb2JpbGVfaGlkZSI+PHRhYmxlIGNsYXNzPSJkaXZpZGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjEwMCUiIHN0eWxlPSJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyBib3JkZXItc3BhY2luZzogMDsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgbXNvLXRhYmxlLWxzcGFjZTogMHB0OyBtc28tdGFibGUtcnNwYWNlOiAwcHQ7IG1pbi13aWR0aDogMTAwJTsgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiIHJvbGU9InByZXNlbnRhdGlvbiIgdmFsaWduPSJ0b3AiPjx0Ym9keT48dHIgc3R5bGU9InZlcnRpY2FsLWFsaWduOiB0b3A7IiB2YWxpZ249InRvcCI+PHRkIGNsYXNzPSJkaXZpZGVyX2lubmVyIiBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsgbWluLXdpZHRoOiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyBwYWRkaW5nLXRvcDogMTVweDsgcGFkZGluZy1yaWdodDogMTVweDsgcGFkZGluZy1ib3R0b206IDE1cHg7IHBhZGRpbmctbGVmdDogMTVweDsiIHZhbGlnbj0idG9wIj48dGFibGUgY2xhc3M9ImRpdmlkZXJfY29udGVudCIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBzdHlsZT0idGFibGUtbGF5b3V0OiBmaXhlZDsgdmVydGljYWwtYWxpZ246IHRvcDsgYm9yZGVyLXNwYWNpbmc6IDA7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IG1zby10YWJsZS1sc3BhY2U6IDBwdDsgbXNvLXRhYmxlLXJzcGFjZTogMHB0OyBib3JkZXItdG9wOiAwcHggc29saWQgI0JCQkJCQjsgd2lkdGg6IDEwMCU7IiBhbGlnbj0iY2VudGVyIiByb2xlPSJwcmVzZW50YXRpb24iIHZhbGlnbj0idG9wIj48dGJvZHk+PHRyIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyIgdmFsaWduPSJ0b3AiPjx0ZCBzdHlsZT0id29yZC1icmVhazogYnJlYWstd29yZDsgdmVydGljYWwtYWxpZ246IHRvcDsgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiIHZhbGlnbj0idG9wIj48c3Bhbj48L3NwYW4+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjwvZGl2PiA8IS0tW2lmICghbXNvKSYoIUlFKV0+PCEtLT48L2Rpdj4gPCEtLTwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjwvZGl2PjwvZGl2PjwvZGl2PiA8IS0tW2lmIChtc28pfChJRSldPjwvdGQ+PC90cj48L3RhYmxlPjwhW2VuZGlmXS0tPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+IDwhLS1baWYgKElFKV0+PC9kaXY+PCFbZW5kaWZdLS0+PC9ib2R5PjwvaHRtbD4=";
            byte[] data = Convert.FromBase64String(base64);
            return Encoding.UTF8.GetString(data);
        }
    }
}