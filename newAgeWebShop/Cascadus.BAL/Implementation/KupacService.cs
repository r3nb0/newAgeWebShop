using Cascadus.BAL.Interface;
using Cascadus.DAL.Implementation;
using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Implementation
{
    public class KupacService : IKupacService
    {
        private readonly IKupacRepo _repo;
        public KupacService(IKupacRepo repo)
        {
            _repo = repo;
        }

        public async Task<int> Add(KupacViewModel kup)
        {
            int id = 0;
            Kupac k = new Kupac 
            {
                Ime = kup.Ime,
                Prezime = kup.Prezime,
                Kontakt = kup.Kontakt,
                Mail = kup.Email,
                Ulica = kup.Ulica,
                KucniBroj = kup.KucniBroj,
                PostanskiBroj = kup.PostanskiBroj,
                Grad = kup.Grad,
                Izbrisano = false
            };
            id = await _repo.DodajAsync(k);
            return id;
        }

        public async Task<bool> Delete(int id)
        {
            return await _repo.ObrisiAsync(id);
        }

        public async Task<KupacViewModel> Get(int id)
        {
            var k = _repo.Dohvati(id);
            KupacViewModel model = new KupacViewModel
            {
                Id = k.Id,
                Ime = k.Ime,
                Prezime = k.Prezime,
                Kontakt = k.Kontakt,
                Email = k.Mail,
                Ulica = k.Ulica,
                KucniBroj = k.KucniBroj,
                PostanskiBroj = k.PostanskiBroj,
                Grad = k.Grad                
            };
            return model;
        }

        public async Task<IEnumerable<KupacViewModel>> GetAll()
        {
            List<KupacViewModel> list = new List<KupacViewModel>();
            _repo.DohvatiSve().ForEach(k => 
            {
                list.Add(new KupacViewModel 
                {
                    Id = k.Id,
                    Ime = k.Ime,
                    Prezime = k.Prezime,
                    Kontakt = k.Kontakt,
                    Email = k.Mail,
                    Ulica = k.Ulica,
                    KucniBroj = k.KucniBroj,
                    PostanskiBroj = k.PostanskiBroj,
                    Grad = k.Grad,
                    Izbrisano = k.Izbrisano
                });
            });
            return list;
        }

        public async Task<IEnumerable<KupacViewModel>> GetAllActive()
        {
            List<KupacViewModel> list = new List<KupacViewModel>();
            _repo.DohvatiAktivne().ForEach(k =>
            {
                list.Add(new KupacViewModel
                {
                    Id = k.Id,
                    Ime = k.Ime,
                    Prezime = k.Prezime,
                    Kontakt = k.Kontakt,
                    Email = k.Mail,
                    Ulica = k.Ulica,
                    KucniBroj = k.KucniBroj,
                    PostanskiBroj = k.PostanskiBroj,
                    Grad = k.Grad,
                    Izbrisano = k.Izbrisano
                });
            });
            return list;
        }

        public async Task<KupacViewModel> Update(int id, KupacViewModel kup)
        {
            Kupac kupac = new Kupac 
            {
                Id = id,
                Grad = kup.Grad,
                Ime = kup.Ime,
                Prezime = kup.Prezime,
                Kontakt = kup.Kontakt,
                Mail = kup.Email,
                KucniBroj = kup.KucniBroj,
                Ulica = kup.Ulica,
                PostanskiBroj = kup.PostanskiBroj,
                Izbrisano = kup.Izbrisano
            };
            var dummy = await _repo.UrediAsync(id, kupac);
            KupacViewModel model = new KupacViewModel 
            { 
                Id = dummy.Id,
                Ime = dummy.Ime,
                Prezime = dummy.Prezime,
                Email = dummy.Mail,
                Grad = dummy.Grad,
                Kontakt = dummy.Kontakt,
                KucniBroj = dummy.KucniBroj,
                PostanskiBroj = dummy.PostanskiBroj,
                Ulica = dummy.Ulica,
                Izbrisano = dummy.Izbrisano
            };
            return model;
        }
    }
}
