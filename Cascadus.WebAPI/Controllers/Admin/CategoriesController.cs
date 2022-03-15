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
    public class CategoriesController : ControllerBase
    {
        private readonly IKategorijeProizvodaService _kategorijaService;
        private const String ERROR_MESSAGE = "Error on: Admin/CategoriesControler";


        public CategoriesController(IKategorijeProizvodaService kategorijaService)
        {
            _kategorijaService = kategorijaService;
        }


        [HttpGet("all")]
        public async Task<ActionResult> GetAll()
        {
            try
            {
                return Ok(await _kategorijaService.GetAll());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("active")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllActive()
        {
            try
            {
                return Ok(await _kategorijaService.GetAllActive());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult> Get(int? id)
        {
            try
            {
                return Ok(await _kategorijaService.Get(id.Value));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

        [HttpPost("add")]
        public async Task<ActionResult> Add([FromBody] KategorijaProizvodaViewModel model)
        {
            try
            {
                return Ok(await _kategorijaService.Add(model));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }


        [HttpGet("delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                return Ok(await _kategorijaService.Delete(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }


        [HttpPost("update/{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] KategorijaProizvodaViewModel model)
        {
            try
            {
                return Ok(await _kategorijaService.Update(id, model));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE);
            }
        }

    }
}