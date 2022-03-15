using Cascadus.BAL.Interface;
using Cascadus.Model.Configuration;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.WebAPI.Controllers.Public
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IKorisnickiRacunService _korisniciService;
        private readonly JwtSigningKey _jwtSigningKey;
        public AuthController(IKorisnickiRacunService korisniciService,
            JwtSigningKey jwtSigningKey)
        {
            _korisniciService = korisniciService;
            _jwtSigningKey = jwtSigningKey;
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel user)
        {
            if (user == null)
            {
                return BadRequest("Bad login! Try again.");
            }

            foreach (var k in await _korisniciService.GetAllActiveKorisnickiRacuni())
            {
                if (k.Username == user.Username)
                {
                    if (k.Password == user.Password)
                    {
                        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSigningKey.Key));
                        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                        var claims = new List<Claim>
                        {
                            new Claim(ClaimTypes.Name, k.Username),
                            new Claim(ClaimTypes.Role, k.Uloga)
                        };
                        var tokenOptions = new JwtSecurityToken(
                            issuer: "https://localhost:44326/",
                            audience: "https://localhost:4200/",
                            claims: claims,
                            expires: DateTime.Now.AddMinutes(30),
                            signingCredentials: signingCredentials
                            );
                        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                        return Ok(new { Token = tokenString, Role = k.Uloga });

                    }
                    return Unauthorized();
                }
            }
            return Unauthorized();
        }

        [HttpPost, Route("register")]
        public async Task<IActionResult> Register([FromBody] LoginPodaciViewModel user)
        {
            bool usernameExist = false;
            if (user == null || 
                user.Username.ToString() == "" || 
                user.Password.Length <= 5)
            {
                return BadRequest("Invalid data. Please try again.");
            }

            foreach (var k in await _korisniciService.GetAllKorisnickiRacuni())
            {
                if (k.Username == user.Username)
                {
                    usernameExist = true;
                }
            }
            if (!usernameExist)
            {
                var model = await _korisniciService.Register(user);
                if (model != null)
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSigningKey.Key));
                    var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokenOptions = new JwtSecurityToken(
                        issuer: "http://cascadus-001-site2.gtempurl.com/",
                        audience: "http://cascadus-001-site1.gtempurl.com/",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(20),
                        signingCredentials: signingCredentials
                        );
                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                    return Ok(new { Token = tokenString, Role = model.Uloga });
                }
            }

            return Conflict("Username already taken");
        }
    }
}
