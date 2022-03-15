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
    public class BuyersController : ControllerBase
    {
        private readonly IKupacService _kupacService;
        private const String ERROR_MESSAGE = "Error on: Admin/BuyserControler";

        public BuyersController(IKupacService kupacService)
        {
            _kupacService = kupacService;
        }

        // GET: api/Buyers
        [HttpGet("all")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetAllBuyers()
        {
            try
            {
                return Ok(await _kupacService.GetAll());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }


        [HttpGet("active")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetAllActiveBuyers()
        {
            try
            {
                return Ok(await _kupacService.GetAllActive());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("get/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetBuyer(int id)
        {
            try
            {
                return Ok(await _kupacService.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("update/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateBuyer(int id, [FromBody]KupacViewModel viewmodel)
        {
            try
            {
                return Ok(await _kupacService.Update(id, viewmodel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("add")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> AddBuyer([FromBody]KupacViewModel viewModel)
        {
            try
            {
                return Ok(await _kupacService.Add(viewModel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("delete/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProizvodViewModel>> DeleteBuyer(int id)
        {
            try
            {
                return Ok(await _kupacService.Delete(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + "\n" + e.ToString());
            }
        }
    }
}
