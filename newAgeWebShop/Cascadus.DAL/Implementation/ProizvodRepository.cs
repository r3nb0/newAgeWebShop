using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class ProizvodRepository : IProizvodRepo
    {
        public async Task<int> DodajAsync(Proizvod obj)
        {
            int id;
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.Proizvod.Add(obj);
                await context.SaveChangesAsync();
                id = obj.Id;
            }
            return id;
        }

        public async Task<Proizvod> DohvatiAsync(int id)
        {
            Proizvod pro = new Proizvod();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                var list = context.Proizvod
                    .Include(p => p.Kategorija);
                foreach (var p in list)
                {
                    if (p.Id == id)
                    {
                        pro = p;
                        pro.Kategorija = p.Kategorija;
                        break;
                    }
                }
            }
            return pro;
        }

        public List<Proizvod> DohvatiAktivne()
        {
            List<Proizvod> list = new List<Proizvod>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                DohvatiSve().ForEach(p =>
                     {
                         if (p.Izbrisano == false)
                         {
                             list.Add(p);
                         }
                     });
            }
            return list;
        }

        public List<Proizvod> DohvatiSve()
        {
            List<Proizvod> list = new List<Proizvod>();
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                list.AddRange(context.Proizvod.Include(p => p.Kategorija));
            }
            return list;
        }

        public async Task<bool> ObrisiAsync(int id)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                context.Proizvod.Find(id).Izbrisano = true;
                int num = await context.SaveChangesAsync();
                var p = await DohvatiAsync(id);
                if (p.Izbrisano == true)
                {
                    return true;
                }
                return false;
            }
        }

        public async Task<Proizvod> UrediAsync(int id, Proizvod obj)
        {
            using (CascadusDEVContext context = new CascadusDEVContext())
            {
                Proizvod dummy = await DohvatiAsync(id);
                if (dummy != null)
                {
                    dummy.Kolicina = obj.Kolicina;
                    dummy.Cijena = obj.Cijena;
                    dummy.Izbrisano = obj.Izbrisano;
                    dummy.KarakteristikeProizvoda = obj.KarakteristikeProizvoda;
                    dummy.KategorijaId = obj.KategorijaId;
                    dummy.Naziv = obj.Naziv;
                    dummy.OpisProizvoda = obj.OpisProizvoda;
                    dummy.Putanja = obj.Putanja;
                    dummy.Thumbnail = obj.Thumbnail;
                    context.Entry(dummy).State = EntityState.Modified;
                    int broj = context.SaveChanges();
                    Console.WriteLine(broj);
                }
            }
            return await DohvatiAsync(id);
        }
    }
}
