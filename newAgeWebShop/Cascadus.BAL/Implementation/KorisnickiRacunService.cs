using Cascadus.BAL.Interface;
using Cascadus.DAL.Implementation;
using Cascadus.DAL.Interface;
using Cascadus.Model.Models;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Implementation
{
    public class KorisnickiRacunService : IKorisnickiRacunService
    {
        private readonly IKorisnickiRacunRepo _repo;
        public KorisnickiRacunService(IKorisnickiRacunRepo repo)
        {
            _repo = repo;
        }

        public async Task<List<KorisnickiRacunViewModel>> GetAllActiveKorisnickiRacuni()
        {
            List<KorisnickiRacunViewModel> list = new List<KorisnickiRacunViewModel>();
            var sviKorisnici = _repo.DohvatiSve();

            sviKorisnici.ForEach(k =>
            {
                if (k.Izbrisano != true)
                {
                    list.Add(new KorisnickiRacunViewModel
                    {
                        Username = k.KorisnickoIme,
                        Password = k.Lozinka,
                        Uloga = k.Uloga
                    });
                }
            });
            return list;
        }

        public async Task<List<KorisnickiRacunViewModel>> GetAllKorisnickiRacuni()
        {
            List<KorisnickiRacunViewModel> list = new List<KorisnickiRacunViewModel>();
            _repo.DohvatiSve().ForEach(k =>
            {
                list.Add(new KorisnickiRacunViewModel
                {
                    Username = k.KorisnickoIme,
                    Password = k.Lozinka,
                    Uloga = k.Uloga
                });
            });
            return list;
        }

        public async Task<KorisnickiRacunViewModel> GetKorisnickiRacun(int id)
        {
            KorisnickiRacun racun = _repo.Dohvati(id);
            KorisnickiRacunViewModel model = null;
            if (racun != null)
            {
                model = new KorisnickiRacunViewModel
                {
                    Password = racun.Lozinka,
                    Username = racun.KorisnickoIme,
                    Uloga = racun.Uloga
                };
            }
            return model;
        }

        public async Task<List<KorisnickiRacunViewModel>> GetKorisnickiRacuniWithRole(String role)
        {
            List<KorisnickiRacunViewModel> list = new List<KorisnickiRacunViewModel>();
            _repo.DohvatiSve().ForEach(k =>
            {
                if (k.Uloga.ToLower() == role.ToLower())
                {
                    list.Add(new KorisnickiRacunViewModel
                    {
                        Username = k.KorisnickoIme,
                        Password = k.Lozinka,
                        Uloga = k.Uloga
                    });
                }
            });
            return list;
        }

        //returns null if login failed
        public async Task<KorisnickiRacunViewModel> Login(LoginPodaciViewModel loginPodaci)
        {

            String usernameHash = loginPodaci.Username;
            String passwordHash = loginPodaci.Password;

            KorisnickiRacun racun = _repo.Login(usernameHash, passwordHash);
            if (racun != null)
            {
                return new KorisnickiRacunViewModel
                {
                    Username = racun.KorisnickoIme,
                    Password = racun.Lozinka,
                    Uloga = racun.Uloga
                };
            }
            return null;
        }

        public async Task<KorisnickiRacunViewModel> Register(LoginPodaciViewModel user)
        {
            KorisnickiRacun kr = new KorisnickiRacun
            {
                Izbrisano = false,
                KorisnickoIme = user.Username,
                Lozinka = user.Password,
                Uloga = AccountRoles.User.ToString()
            };
            int id = await _repo.DodajAsync(kr);

            var povrat = _repo.Dohvati(id);

            KorisnickiRacunViewModel model = new KorisnickiRacunViewModel
            {
                Username = povrat.KorisnickoIme,
                Uloga = povrat.Uloga,
                Password = povrat.Lozinka
            };
            return model;
        }
    }
}
