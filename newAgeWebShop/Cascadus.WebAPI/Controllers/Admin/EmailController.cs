using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Cascadus.BAL.Interface;
using Microsoft.AspNetCore.Authorization;
using System;
using Cascadus.Model.Models.DBModels;

namespace Cascadus.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize]
    public class EmailController : ControllerBase
    {
        private readonly IMailService _mailService;
        private readonly IKupacService _kupacService;

        public EmailController(IMailService mailService, IKupacService kupacService)
        {
            _mailService = mailService;
            _kupacService = kupacService;
        }

        [HttpGet("get")]
        public async Task<IEnumerable<BuyersEmailViewModel>> Get()
        {
            List<BuyersEmailViewModel> list = new List<BuyersEmailViewModel>();
            foreach (var item in await _kupacService.GetAll())
            {
                list.Add(new BuyersEmailViewModel
                {
                    Ime = item.Ime,
                    Prezime = item.Prezime,
                    Email = item.Email
                });
            }
            foreach (var item in await _mailService.GetActiveEmails())
            {
                if (list.Where(x => x.Email == item.Mail).Count() == 0)
                {
                    list.Add(new BuyersEmailViewModel
                    {
                        Ime = "",
                        Prezime = "",
                        Email = item.Mail
                    });
                }
            }
            return list;
        }

        [HttpPost("send")]
        public async Task<ActionResult> Post([FromBody] Message model)
        {
            var files = Request.Form.Files.Any() ? Request.Form.Files : new FormFileCollection();
            var message = new Message(model.To, model.Subject, model.Content, model.Attachments);
            await _mailService.SendEmailAsync(message);
            return Ok("Emails sent successfully!");
        }

        [HttpPost("subscribe")]
        [AllowAnonymous]
        public async Task<ActionResult> Subscribe([FromBody] EmailViewModel model)
        {
            return Ok(await _mailService.Subscribe(model.Email));
        }
        [HttpPost("unsubscribe")]
        [AllowAnonymous]
        public async Task<ActionResult> Unsubscribe([FromBody] EmailViewModel model)
        {
            return Ok(await _mailService.Unsubscribe(model.Email));
        }
    }
}