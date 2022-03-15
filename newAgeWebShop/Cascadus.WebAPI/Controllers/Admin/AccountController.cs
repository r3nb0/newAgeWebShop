using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Cascadus.Model.Models.ViewModels;
using Cascadus.Model.Models;
using Cascadus.BAL.Interface;
using Microsoft.AspNetCore.Authorization;

namespace Cascadus.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IKorisnickiRacunService _korisnikService;
        private const String LOGIN_ERROR_MESSAGE = "Login failed.";
        private const String ERROR_MESSAGE = "Something went wrong. Please try again later. ";


        public AccountController(IKorisnickiRacunService korisnickiRacunService)
        {
            _korisnikService = korisnickiRacunService;
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginPodaciViewModel loginPodatci)
        {
            try
            {
                return Ok(await _korisnikService.Login(loginPodatci));
            }
            catch (Exception e)
            {
                //_logger.LogError(e, ERROR_MESSAGE+e.Message);
                return StatusCode(500, LOGIN_ERROR_MESSAGE + e.ToString());
            }
        }

        //[HttpGet("register")]
        //public async Task<IActionResult> Register()
        //{
        //    try
        //    {
        //        List<String> roleList = new List<String>();
        //        (Enum.GetValues(typeof(AccountRoles)).AsQueryable() as List<String>)
        //            .ForEach(r => roleList.Add(r));

        //        return Ok(roleList);
        //    }
        //    catch (Exception e)
        //    {
        //        return StatusCode(500, ERROR_MESSAGE + e.ToString());
        //    }
        //}

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register(LoginPodaciViewModel user)
        {
            try
            {
                return Ok(await _korisnikService.Register(user));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + e.ToString());
            }
        }

        [Authorize]
        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllKorisnickiRacuni()
        {
            try
            {
                return Ok(await _korisnikService.GetAllKorisnickiRacuni());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + e.ToString());
            }
        }

        [Authorize]
        [HttpGet("getActive")]
        public async Task<IActionResult> GetAllActiveKorisnickiRacuni()
        {
            try
            {
                return Ok(await _korisnikService.GetAllActiveKorisnickiRacuni());
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + e.ToString());
            }
        }

        [Authorize]
        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetKorisnickiRacun(int id)
        {
            try
            {
                return Ok(await _korisnikService.GetKorisnickiRacun(id));
            }
            catch (Exception e)
            {
                return StatusCode(500, ERROR_MESSAGE + e.ToString());
            }
        }

    }
}
