using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class PopustKodRepository : IPopustKodRepo
    {
        public int Dodaj(PopustKodovi obj)
        {
            int id = 0;
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.PopustKodovi.Add(obj);
                context.SaveChanges();
                id = obj.Id;
            }
            return id;
        }

        public PopustKodovi Dohvati(int id)
        {
            PopustKodovi kod = new PopustKodovi();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                kod = context.PopustKodovi.Find(id);
            }
            return kod;
        }

        public List<PopustKodovi> DohvatiAktivne()
        {
            List<PopustKodovi> list = new List<PopustKodovi>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                DohvatiSve().ForEach(kod =>
                    {
                        if (kod.Izbrisano == false && kod.VrijediDo >= DateTime.Now)
                        {
                            list.Add(kod);
                        }
                    });
            }
            return list;
        }

        public async Task<PopustKodovi> DohvatiPopustKodZaRacun(string brojRacuna)
        {
            PopustKodovi popustKod = new PopustKodovi();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                popustKod = await DohvatiPopustKodZaRacun(brojRacuna);
                if (popustKod != null)
                {
                    return popustKod;
                }
            }
            return null;
        }

        public List<PopustKodovi> DohvatiSve()
        {
            List<PopustKodovi> list = new List<PopustKodovi>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {

                foreach (var k in context.PopustKodovi)
                {
                    list.Add(new PopustKodovi
                    {
                        Id = k.Id,
                        PopustKod = k.PopustKod,
                        PopustUpostocima = k.PopustUpostocima,
                        Izbrisano = k.Izbrisano,
                        VrijediDo = k.VrijediDo
                    });
                }
            }
            return list;
        }

        public bool Obrisi(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.PopustKodovi.Find(id).Izbrisano = true;
                context.SaveChanges();
                if (context.PopustKodovi.Find(id).Izbrisano == true)
                {
                    return true;
                }
            }
            return false;
        }

        public PopustKodovi Uredi(int id, PopustKodovi obj)
        {
            PopustKodovi povratnaInformacija = new PopustKodovi();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                PopustKodovi dummy = context.PopustKodovi.Find(id);
                dummy.Izbrisano = obj.Izbrisano;
                dummy.PopustKod = obj.PopustKod;
                dummy.PopustUpostocima = obj.PopustUpostocima;
                dummy.VrijediDo = obj.VrijediDo;
                context.SaveChangesAsync();
                povratnaInformacija = Dohvati(id);
            }
            return povratnaInformacija;
        }
    }
}
