using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cascadus.Model.Models.ViewModels;
using Cascadus.BAL.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace Cascadus.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductsController : ControllerBase
    {
        private readonly IProizvodService _proizvodService;
        private const String ERROR_MESSAGE = "Error on: Admin/ProductsControler";

        public ProductsController(IProizvodService proizvodService)
        {
            _proizvodService = proizvodService;
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetAllProizvod()
        {
            try
            {
                return Ok(await _proizvodService.GetAll());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("active")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllActiveProizvod()
        {
            try
            {
                return Ok(await _proizvodService.GetAllActive());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("get/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult> GetProizvod(int id)
        {
            try
            {
                return Ok(await _proizvodService.Get(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }
        [HttpGet("lookup/{name}")]
        [AllowAnonymous]
        public async Task<ActionResult> GetProizvodByName(String name)
        {
            try
            {
                return Ok(await _proizvodService.GetByName(name));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("update/{id}")]
        public async Task<IActionResult> UpdateProizvod(int id, [FromBody]ProizvodViewModel proizvod)
        {
            try
            {
                return Ok(await _proizvodService.Update(id, proizvod));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddProizvod([FromBody]ProizvodViewModel proizvod)
        {
            try
            {
                return Ok(await _proizvodService.Add(proizvod));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("delete/{id}")]
        public async Task<ActionResult<ProizvodViewModel>> DeleteProizvod(int id)
        {
            try
            {
                return Ok(await _proizvodService.Delete(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

    }
}
