using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class StavkaRepository : IStavkaRepo
    {
        public async Task<int> Dodaj(Stavka obj)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                int num = 0;
                context.Stavka.Add(obj);
                num = context.SaveChanges();
                return obj.Id;
            }
        }

        public Stavka Dohvati(int id)
        {
            Stavka stavka = new Stavka();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                stavka = context.Stavka.Find(id);
            }
            return stavka;
        }

        public List<Stavka> DohvatiAktivne()
        {
            List<Stavka> list = new List<Stavka>();
            DohvatiSve().ForEach(s =>
            {
                if (s.Izbrisano == false)
                {
                    list.Add(s);
                }
            });
            return list;
        }

        public List<Stavka> DohvatiSve()
        {
            List<Stavka> list = new List<Stavka>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                list.AddRange(context.Stavka);
            }
            return list;
        }

        public List<Stavka> DohvatiSveStavkeZaRacun(int racunId)
        {
            List<Stavka> list = new List<Stavka>();
            DohvatiSve().ForEach(item => 
            {
                if (item.RacunId == racunId)
                {
                    list.Add(item);
                }
            });
            return list;
        }

        public bool Obrisi(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.Stavka.Find(id).Izbrisano = true;
                context.SaveChangesAsync();
                if (context.Stavka.Find().Izbrisano == true)
                {
                    return true;
                }
            }
            return false;
        }

        public Stavka Uredi(int id, Stavka obj)
        {
            Stavka povratnaInformacija = new Stavka();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                Stavka dummy = context.Stavka.Find(id);
                dummy.CijenaPoKomadu = obj.CijenaPoKomadu;
                dummy.Izbrisano = obj.Izbrisano;
                dummy.Kolicina = obj.Kolicina;
                dummy.PopustKodId = obj.PopustKodId;
                dummy.ProizvodId = obj.ProizvodId;
                dummy.RacunId = obj.RacunId;
                dummy.UkupnaCijena = obj.UkupnaCijena;
                context.SaveChangesAsync();
                povratnaInformacija = dummy;
            }
            return povratnaInformacija;
        }
    }
}
