using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class KupacRepository : IKupacRepo
    {
        public async Task<int> DodajAsync(Kupac obj)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                int num = 0;
                context.Kupac.Add(obj);
                num = await context.SaveChangesAsync();
                return obj.Id;
            }
        }

        public Kupac Dohvati(int id)
        {
            Kupac kupac = new Kupac();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                kupac = context.Kupac.Find(id);
            }
            return kupac;
        }

        public List<Kupac> DohvatiAktivne()
        {
            List<Kupac> kupci = new List<Kupac>();
            DohvatiSve().ForEach(k =>
            {
                if (k.Izbrisano == false)
                {
                    kupci.Add(k);
                }
            });
            return kupci;
        }

        public List<Kupac> DohvatiSve()
        {
            List<Kupac> kupci = new List<Kupac>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                foreach (var kupac in context.Kupac)
                {
                    Kupac k = new Kupac();
                    k.Id = kupac.Id;
                    k.Ime = kupac.Ime;
                    k.Prezime = kupac.Prezime;
                    k.Grad = kupac.Grad;
                    k.PostanskiBroj = kupac.PostanskiBroj;
                    k.Ulica = kupac.Ulica;
                    k.KucniBroj = kupac.KucniBroj;
                    k.KorisnickiRacunId = kupac.KorisnickiRacunId;
                    k.Mail = kupac.Mail;
                    k.Kontakt = kupac.Kontakt;
                    k.Izbrisano = kupac.Izbrisano;
                    kupci.Add(k);
                }
            }
            return kupci;
        }

        public async Task<bool> ObrisiAsync(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                Kupac kupac = context.Kupac.Find(id);
                kupac.Izbrisano = true;
                context.Kupac.Update(kupac);
                await context.SaveChangesAsync();
                if (context.Kupac.Find(id).Izbrisano == true)
                {
                    return true;
                }
                return false;
            }
        }

        public async Task<Kupac> UrediAsync(int id, Kupac obj)
        {
            Kupac povratnaInformacija = new Kupac();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                Kupac dummy = Dohvati(id);
                dummy.Ime = obj.Ime;
                dummy.Prezime = obj.Prezime;
                dummy.Grad = obj.Grad;
                dummy.PostanskiBroj = obj.PostanskiBroj;
                dummy.Ulica = obj.Ulica;
                dummy.KucniBroj = obj.KucniBroj;
                dummy.KorisnickiRacunId = obj.KorisnickiRacunId;
                dummy.Mail = obj.Mail;
                dummy.Kontakt = obj.Kontakt;
                dummy.Izbrisano = obj.Izbrisano;
                context.Entry(dummy).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                int result = await context.SaveChangesAsync();
            }
            povratnaInformacija = Dohvati(id);
            return povratnaInformacija;
        }
    }
}
