using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class KategorijaProizvodaRepository : IKategorijaProizvodaRepo
    {
        public async Task<int> DodajAsync(KategorijaProizvoda obj)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                KategorijaProizvoda cat = new KategorijaProizvoda
                {
                    Id = obj.Id,
                    NazivKategorije = obj.NazivKategorije,
                    Izbrisano = obj.Izbrisano
                };
                context.Add(cat);
                await context.SaveChangesAsync();
                return DohvatiIdZadnjeg();
            }
        }

        public KategorijaProizvoda Dohvati(int id)
        {
            KategorijaProizvoda kp = new KategorijaProizvoda();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                kp = context.KategorijaProizvoda.Find(id);
            }
            return kp;
        }

        private int DohvatiIdZadnjeg()
        {
            List<KategorijaProizvoda> list = DohvatiSve();
            return list[list.Count - 1].Id;
        }

        public List<KategorijaProizvoda> DohvatiAktivne()
        {
            List<KategorijaProizvoda> list = new List<KategorijaProizvoda>();

            DohvatiSve().ForEach(kp =>
            {
                if (!kp.Izbrisano)
                {
                    list.Add(kp);
                }
            });

            return list;
        }

        public List<KategorijaProizvoda> DohvatiSve()
        {
            List<KategorijaProizvoda> list = new List<KategorijaProizvoda>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                list.AddRange(context.KategorijaProizvoda);
            }
            return list;
        }

        public async Task<bool> ObrisiAsync(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.KategorijaProizvoda.Find(id).Izbrisano = true;
                await context.SaveChangesAsync();
                if (context.KategorijaProizvoda.Find(id).Izbrisano == true)
                {
                    return true;
                }
                return false;
            }
        }

        public async Task<KategorijaProizvoda> UrediAsync(int id, KategorijaProizvoda obj)
        {
            KategorijaProizvoda povratnaInformacija = new KategorijaProizvoda();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                KategorijaProizvoda dummy = context.KategorijaProizvoda.Find(id);
                dummy.Izbrisano = obj.Izbrisano;
                dummy.NazivKategorije = obj.NazivKategorije;
                await context.SaveChangesAsync();
                povratnaInformacija = dummy;
            }
            return povratnaInformacija;
        }
    }
}
