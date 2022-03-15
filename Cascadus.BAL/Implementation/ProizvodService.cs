using Cascadus.BAL.Interface;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using Cascadus.DAL.Implementation;
using Cascadus.Model.Models.ViewModels;
using System.Threading.Tasks;
using Cascadus.DAL.Interface;

namespace Cascadus.BAL.Implementation
{
    public class ProizvodService : IProizvodService
    {
        private readonly IProizvodRepo _repo;
        public ProizvodService(IProizvodRepo repo)
        {
            _repo = repo;
        }

        public async Task<int> Add(ProizvodViewModel pro)
        {
            int id = 0;
            if (pro.Putanja == null)
            {
                pro.Putanja = "";
            }
            Proizvod proizvod = new Proizvod
            {
                Thumbnail = pro.Thumbnail,
                Kolicina = pro.Kolicina,
                Cijena = pro.Cijena,
                Izbrisano = false,
                KarakteristikeProizvoda = pro.Karakteristike,
                OpisProizvoda = pro.Opis,
                KategorijaId = pro.KategorijaId,
                Naziv = pro.Naziv,
                Putanja = pro.Putanja,
            };

            return await _repo.DodajAsync(proizvod);
        }

        public async Task<ProizvodViewModel> Get(int pro)
        {
            Proizvod proizvod = new Proizvod();
            proizvod = await _repo.DohvatiAsync(pro);
            if (proizvod == null)
            {
                return null;
            }

            ProizvodViewModel model = new ProizvodViewModel
            {
                Id = proizvod.Id,
                Thumbnail = proizvod.Thumbnail,
                Opis = proizvod.OpisProizvoda,
                Izbrisano = proizvod.Izbrisano,
                Karakteristike = proizvod.KarakteristikeProizvoda,
                KategorijaId = proizvod.KategorijaId,
                Kategorija = proizvod.Kategorija.NazivKategorije,
                Naziv = proizvod.Naziv,
                Putanja = proizvod.Putanja,
                Kolicina = proizvod.Kolicina,
                Cijena = proizvod.Cijena
            };
            return model;
        }

        public async Task<IEnumerable<ProizvodViewModel>> GetAllActive()
        {
            List<ProizvodViewModel> list = new List<ProizvodViewModel>();

            List<Proizvod> products = _repo.DohvatiAktivne() as List<Proizvod>;
            products.ForEach(p =>
            {
                list.Add(new ProizvodViewModel
                {
                    Id = p.Id,
                    Kolicina = p.Kolicina,
                    Thumbnail = p.Thumbnail,
                    Cijena = p.Cijena,
                    Izbrisano = p.Izbrisano,
                    Karakteristike = p.KarakteristikeProizvoda,
                    KategorijaId = p.KategorijaId,
                    Kategorija = p.Kategorija.NazivKategorije,
                    Naziv = p.Naziv,
                    Opis = p.OpisProizvoda,
                    Putanja = p.Putanja
                });
            });
            return list;
        }

        public async Task<IEnumerable<ProizvodViewModel>> GetAll()
        {
            List<ProizvodViewModel> list = new List<ProizvodViewModel>();

            List<Proizvod> products = _repo.DohvatiSve() as List<Proizvod>;
            products.ForEach(p =>
            {
                list.Add(new ProizvodViewModel
                {
                    Id = p.Id,
                    Kolicina = p.Kolicina,
                    Thumbnail = p.Thumbnail,
                    Cijena = p.Cijena,
                    Izbrisano = p.Izbrisano,
                    Karakteristike = p.KarakteristikeProizvoda,
                    KategorijaId = p.KategorijaId,
                    Kategorija = p.Kategorija.NazivKategorije,
                    Naziv = p.Naziv,
                    Opis = p.OpisProizvoda,
                    Putanja = p.Putanja
                });
            });
            return list;
        }

        public async Task<bool> Delete(int id)
        {
            return await _repo.ObrisiAsync(id);
        }

        public async Task<ProizvodViewModel> Update(int id, ProizvodViewModel pro)
        {
            Proizvod p = new Proizvod
            {
                Id = id,
                Putanja = pro.Putanja,
                Cijena = pro.Cijena,
                Kolicina = pro.Kolicina,
                Thumbnail = pro.Thumbnail,
                Izbrisano = pro.Izbrisano,
                KarakteristikeProizvoda = pro.Karakteristike,
                KategorijaId = pro.KategorijaId,
                Naziv = pro.Naziv,
                OpisProizvoda = pro.Opis
            };

            var dummy = await _repo.UrediAsync(id, p);
            ProizvodViewModel model = new ProizvodViewModel
            {
                Id = dummy.Id,
                Naziv = dummy.Naziv,
                KategorijaId = dummy.KategorijaId,
                Thumbnail = dummy.Thumbnail,
                Putanja = dummy.Putanja,
                Opis = dummy.OpisProizvoda,
                Kolicina = dummy.Kolicina,
                Cijena = dummy.Cijena,
                Karakteristike = dummy.KarakteristikeProizvoda,
                Izbrisano = dummy.Izbrisano
            };
            return model;
        }

        public async Task<ProizvodViewModel> GetByName(string name)
        {
            Proizvod proizvod = null;
            var proizvodi = _repo.DohvatiAktivne();
            foreach (var pro in proizvodi)
            {
                if (pro.Naziv == name)
                {
                    proizvod = pro;
                    break;
                }
            }
            if (proizvod == null)
            {
                return null;
            }
            else
            {
                ProizvodViewModel model = new ProizvodViewModel(proizvod);
                return model;
            }

        }
    }
}
