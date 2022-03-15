using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class RacunRepository : IRacunRepo
    {
        public async Task<int> DodajAsync(Racun obj)
        {
            int id = 0;
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.Racun.Add(obj);
                await context.SaveChangesAsync();
                id = obj.Id;
            }
            return id;
        }

        public Racun Dohvati(int id)
        {
            Racun racun = new Racun();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                var list = context.Racun
                    .Include(r => r.Kupac)
                    .Include(r => r.Stavka)
                        .ThenInclude(x => x.PopustKod)
                    .Include(x => x.Stavka)
                        .ThenInclude(x => x.Proizvod);
                foreach (var r in list)
                {
                    if (r.Id ==id)
                    {
                        racun = r;
                        break;
                    }
                }
            }
            return racun;
        }

        public List<Racun> DohvatiAktivne()
        {
            List<Racun> racuni = new List<Racun>();
            DohvatiSve().ForEach(r => 
            {
                if (r.Izbrisano == false)
                {
                    racuni.Add(r);
                }
            });
            return racuni;
        }

        public List<Racun> DohvatiSve()
        {
            List<Racun> list = new List<Racun>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                foreach (var r in context.Racun
                    .Include(r => r.Kupac)
                    .Include(r => r.Stavka)
                        .ThenInclude(x => x.PopustKod)
                    .Include(x => x.Stavka)
                        .ThenInclude(x => x.Proizvod))
                {
                    list.Add(r);
                }
            }
            return list;
        }

        public List<Racun> DohvatiSveRacuneZaKupca(int kupacId)
        {
            List<Racun> list = new List<Racun>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                foreach (var racun in context.Racun
                    .Include(r => r.Kupac)
                    .Include(r => r.Stavka)
                        .ThenInclude(x => x.PopustKod)
                    .Include(x => x.Stavka)
                        .ThenInclude(x => x.Proizvod))
                {
                    if (racun.KupacId == kupacId)
                    {
                        list.Add(racun);
                    }
                }
            }
            return list;
        }

        public async Task<bool> ObrisiAsync(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.Racun.Find(id).Izbrisano = true;
                await context.SaveChangesAsync();
                if (context.Racun.Find(id).Izbrisano == true)
                {
                    return true;
                }
            }
            return false;
        }

        public async Task<Racun> UrediAsync(int id, Racun obj)
        {
            Racun povratnaInformacija = new Racun();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                Racun dummy = context.Racun.Find(id);
                dummy.BrojRacuna = obj.BrojRacuna;
                dummy.DatumIzdavanja = obj.DatumIzdavanja;
                dummy.DatumSlanja = obj.DatumSlanja;
                dummy.Izbrisano = obj.Izbrisano;
                dummy.KomentarNarudzbe = obj.KomentarNarudzbe;
                dummy.KupacId = obj.KupacId;
                dummy.PracenjePosiljke = obj.PracenjePosiljke;
                dummy.Guid = obj.Guid;
                dummy.Stavka = obj.Stavka;
                dummy.Status = obj.Status;
                dummy.Signature = obj.Signature;
                dummy.ApprovalCode = obj.ApprovalCode;
                dummy.NacinPlacanja = obj.NacinPlacanja;
                await context.SaveChangesAsync();
                povratnaInformacija = dummy;
            }
            return povratnaInformacija;
        }

        public async Task<int> DohvatiZadnjiRacunAsync()
        {
            int broj = 0;
            await using (CascadusDEVContext context = new CascadusDEVContext())
            {
                List<Racun> list = DohvatiSve();
                list.Sort((x, y) => x.Id.CompareTo(y.Id));
                broj = list[list.Count - 1].Id;
            }
            return (broj + 1);
        }
    }
}
