using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class KorisnickiRacunRepository : IKorisnickiRacunRepo
    {
        public async Task<int> DodajAsync(KorisnickiRacun racun)
        {
            int id = 0;
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.KorisnickiRacun.Add(racun);
                await context.SaveChangesAsync();
                id = context.KorisnickiRacun.Find(racun.Id).Id;
            }
            return id;
        }

        public KorisnickiRacun Dohvati(int id)
        {
            KorisnickiRacun racun = new KorisnickiRacun();

            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                racun = context.KorisnickiRacun.Find(id);
            }
            return racun;
        }

        public List<KorisnickiRacun> DohvatiAktivne()
        {
            List<KorisnickiRacun> korisnickiRacuni = new List<KorisnickiRacun>();
            DohvatiSve().ForEach(r =>
            {
                if (r.Izbrisano == false)
                {
                    korisnickiRacuni.Add(r);
                }
            });
            return korisnickiRacuni;
        }

        public List<KorisnickiRacun> DohvatiSve()
        {
            List<KorisnickiRacun> korisnickiRacuni = new List<KorisnickiRacun>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                foreach (var racun in context.KorisnickiRacun)
                {
                    korisnickiRacuni.Add(
                        new KorisnickiRacun
                        {
                            Id = racun.Id,
                            KorisnickoIme = racun.KorisnickoIme,
                            Lozinka = racun.Lozinka,
                            Uloga = racun.Uloga,
                            Izbrisano = false
                        });
                }
            }
            return korisnickiRacuni;
        }

        public KorisnickiRacun Login(String username, String password)
        {
            KorisnickiRacun racun = null;

            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                var acc = DohvatiAktivne().Find(a => a.KorisnickoIme == username);
                if (acc.Lozinka == password)
                {
                    racun = acc;
                }
                else 
                { 
                    racun = null; 
                }
            }
            return racun;
        }

        //true if deleted
        public async Task<bool> ObrisiAsync(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                KorisnickiRacun racun = Dohvati(id);
                if (racun != null)
                {
                    context.KorisnickiRacun.Find(racun).Izbrisano = true;
                    await context.SaveChangesAsync();
                    if (context.KorisnickiRacun.Find(id).Izbrisano == true)
                    {
                        return true;
                    }
                    return false;
                }
            }
            return false;
        }

        public async Task<KorisnickiRacun> UrediAsync(int id, KorisnickiRacun obj)
        {
            KorisnickiRacun povratnaInformacija = new KorisnickiRacun();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                KorisnickiRacun dummy = context.KorisnickiRacun.Find(id);
                dummy.KorisnickoIme = obj.KorisnickoIme;
                dummy.Lozinka = obj.Lozinka;
                dummy.Kupac = obj.Kupac;
                dummy.Uloga = obj.Uloga;
                await context.SaveChangesAsync();
                povratnaInformacija = Dohvati(id);
            }
            return povratnaInformacija;
        }
    }
}
