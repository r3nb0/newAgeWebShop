using System;
using System.Threading.Tasks;
using Cascadus.BAL.Interface;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cascadus.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize]
    public class InvoicesController : ControllerBase
    {
        private readonly IRacunService _racunService; 
        private const String ERROR_MESSAGE = "Error on: Admin/InvoicesControler";

        public InvoicesController(IRacunService racunService)
        {
            _racunService = racunService;
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetAllInvoices()
        {
            try

            {
                return Ok(await _racunService.GetAll());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }


        [HttpGet("active")]
        public async Task<ActionResult> GetAllActiveInvoices()
        {
            try
            {
                return Ok(await _racunService.GetAllActive());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }

        [HttpGet("buyer/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<RacunViewModel>> GetInvoiceByBuyer(int id)
        {
            try
            {
                return Ok(await _racunService.GetInvoicesForBuyerId(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }


        [HttpGet("get/{id}")]
        public async Task<ActionResult> GetInvoice(int id)
        {
            try
            {
                return Ok(await _racunService.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateInvoice(int id, [FromBody]RacunViewModel viewmodel)
        {
            try
            {
                return Ok(await _racunService.Update(id, viewmodel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddInvoice([FromBody]RacunViewModel viewModel)
        {
            try
            {
                return Ok(await _racunService.Add(viewModel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }

        [HttpGet("delete/{id}")]
        public async Task<ActionResult<RacunViewModel>> DeleteInvoice(int id)
        {
            try
            {
                return Ok(await _racunService.Delete(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }

        [HttpGet("next")]
        [AllowAnonymous]
        public async Task<ActionResult<int>> NextInvoiceNumber()
        {
            try
            {
                return Ok(await _racunService.GetNextInvoiceNumber());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " \n error: " + e.ToString());
            }
        }
    }
}