using Cascadus.BAL.Interface;
using Cascadus.Model.Configuration;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Cascadus.BAL.Implementation
{
    public class PaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;
        JsonSerializerOptions jsonSerializerOptions = new JsonSerializerOptions() { PropertyNameCaseInsensitive = true };

        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IRacunService _racunService;
        private readonly IKupacService _kupacService;
        private readonly IProizvodService _proizvodService;
        private readonly IStavkaService _stavkaService;
        private readonly HttpClient _httpClient;

        public PaymentService(
            IRacunService racunService,
            IKupacService kupacService,
            IProizvodService proizvodService,
            IStavkaService stavkaService,
            IHttpClientFactory httpClientFactory)
        {
            _racunService = racunService;
            _kupacService = kupacService;
            _proizvodService = proizvodService;
            _stavkaService = stavkaService;
            _httpClientFactory = httpClientFactory;
            _httpClient = _httpClientFactory.CreateClient("PaymentService");
        }

        public async Task<CorvusPaymentViewModel> GeneratePaymentUrl(RacunViewModel invoice, OrderViewModel order)
        {
            List<MyKeyValuePair<object, String>> cart = new List<MyKeyValuePair<object, String>>();
            foreach (var item in order.PaymentModel.Cart)
            {
                var product = await _proizvodService.Get(int.Parse(item.Key.ToString()));
                cart.Add(new MyKeyValuePair<object, String>(product.Naziv, item.Value.ToString()));
            }
            ProizvodViewModel shipping = await _proizvodService.Get(1);
            cart.Add(new MyKeyValuePair<object, String>(shipping.Naziv, ""));
            KupacViewModel buyer = new KupacViewModel
            {
                Ime = order.Name,
                Prezime = order.Surname,
                PostanskiBroj = order.PostNumber,
                Ulica = order.Street,
                KucniBroj = order.HouseNumber,
                Email = order.Email,
                Grad = order.City,
                Kontakt = order.Contact
            };
            order.PaymentModel.Cart = cart;
            CorvusPaymentViewModel corvusPaymentViewModel =
                   new CorvusPaymentViewModel(
                       invoice.BrojRacuna.ToString(),
                       order.PaymentModel.Amount,
                       order.PaymentModel.GetFormattedCartItems(),
                       buyer);
            return corvusPaymentViewModel;
        }

        public async Task<RacunViewModel> VerifyCorvusPayment(String orderNumber, String signature)
        {
            RacunViewModel model = null;
            model = await _racunService.GetInvoiceByInvoiceNumber(orderNumber);
            if (model != null)
            {
                return model;
            }
            return null;
        }

        public async Task<RacunViewModel> CancelCorvusPayment(string orderNumber)
        {
            RacunViewModel model = null;
            model = await _racunService.GetInvoiceByInvoiceNumber(orderNumber);
            return model;
        }

        public async Task<RacunViewModel> CheckCorvusTransaction(CorvusManageTransactionViewModel model)
        {
            var values = new Dictionary<String, String>
            {
                { "store_id", model.StoreId.ToString() },
                { "order_number", model.OrderNumber },
                { "hash", model.Hash },

            };
            var content = new FormUrlEncodedContent(values);
            var response = await _httpClient.PostAsync(Configuration.CORVUSPAY_COMPLETE_URL, content);
            var responseString = await response.Content.ReadAsStringAsync();

            return new RacunViewModel();
        }
    }
}
