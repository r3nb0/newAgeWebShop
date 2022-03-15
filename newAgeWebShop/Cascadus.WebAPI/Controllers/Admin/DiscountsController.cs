using Cascadus.BAL.Interface;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Cascadus.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize]
    public class DiscountsController : Controller
    {
        private readonly IPopustKodService _codeService;
        private const String ERROR_MESSAGE = "Error on: Admin/DiscountsController";

        public DiscountsController(IPopustKodService codesService)
        {
            _codeService = codesService;
        }

        // GET: api/Discounts
        [HttpGet("all")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                return Ok(await _codeService.GetAll());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + "\n error message: " + e.Message + "\n stacktrace: " + e.StackTrace);
            }
        }


        [HttpGet("active")]
        public async Task<ActionResult> GetAllActive()
        {
            try
            {
                return Ok(await _codeService.GetAllActive());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("valid/{date}")]
        public async Task<ActionResult> GetValid(DateTime date)
        {
            try
            {
                return Ok(await _codeService.Valid(date));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }
        [HttpGet("lookup/{code}")]
        [AllowAnonymous]
        public async Task<ActionResult> IsValid(String code)
        {
            try
            {
                return Ok(await _codeService.Lookup(code));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + " " + e.Message);
            }
        }

        [HttpGet("get/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                return Ok(await _codeService.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("update/{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PopustKodViewModel viewmodel)
        {
            try
            {
                return Ok(await _codeService.Update(id, viewmodel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + "\n " + e.Message);
            }
        }

        [HttpPost("add")]
        public async Task<ActionResult> Add([FromBody] PopustKodViewModel viewModel)
        {
            try
            {
                return Ok(await _codeService.Add(viewModel));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("delete/{id}")]
        public async Task<ActionResult<ProizvodViewModel>> Delete(int id)
        {
            try
            {
                if (await _codeService.Delete(id))
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(409, "Something went wrong while deleting! Please try again later.. ");
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }
    }
}
