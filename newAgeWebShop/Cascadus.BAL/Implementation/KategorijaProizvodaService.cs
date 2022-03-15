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
    public class KategorijaProizvodaService : IKategorijeProizvodaService
    {
        private readonly IKategorijaProizvodaRepo _repo;
        public KategorijaProizvodaService(IKategorijaProizvodaRepo repo)
        {
            _repo = repo;
        }
        public async Task<int> Add(KategorijaProizvodaViewModel pro)
        {
            KategorijaProizvoda kp = new KategorijaProizvoda();
            kp.NazivKategorije = pro.Naziv;
            kp.Izbrisano = false;
            return await _repo.DodajAsync(kp);
        }

        public async Task<bool> Delete(int id)
        {
            return await _repo.ObrisiAsync(id);
        }

        public async Task<KategorijaProizvodaViewModel> Get(int id)
        {
            var dummy = _repo.Dohvati(id);
            if (dummy == null)
            {
                return null;
            }
            KategorijaProizvodaViewModel model = new KategorijaProizvodaViewModel
            {
                Id = dummy.Id,
                Izbrisano = dummy.Izbrisano,
                Naziv  = dummy.NazivKategorije
            };
            return model;
        }

        public async Task<IEnumerable<KategorijaProizvodaViewModel>> GetAll()
        {
            List<KategorijaProizvodaViewModel> list = new List<KategorijaProizvodaViewModel>();
            foreach (var kat in _repo.DohvatiSve())
            {
                list.Add(new KategorijaProizvodaViewModel 
                {
                    Id = kat.Id,
                    Izbrisano = kat.Izbrisano,
                    Naziv = kat.NazivKategorije
                });
            }
            return list;
        }

        public async Task<IEnumerable<KategorijaProizvodaViewModel>> GetAllActive()
        {
            List<KategorijaProizvodaViewModel> list = new List<KategorijaProizvodaViewModel>();
            foreach (var kat in _repo.DohvatiAktivne())
            {
                list.Add(new KategorijaProizvodaViewModel
                {
                    Id = kat.Id,
                    Izbrisano = kat.Izbrisano,
                    Naziv = kat.NazivKategorije
                });
            }
            return list;
        }

        public async Task<KategorijaProizvodaViewModel> Update(int id, KategorijaProizvodaViewModel pro)
        {
            KategorijaProizvoda kat = new KategorijaProizvoda 
            {
                Id = id,
                NazivKategorije = pro.Naziv,
                Izbrisano = pro.Izbrisano
            };
            var dummy = await _repo.UrediAsync(id, kat);

            KategorijaProizvodaViewModel model = new KategorijaProizvodaViewModel
            {
                Id = dummy.Id,
                Izbrisano = dummy.Izbrisano,
                Naziv = dummy.NazivKategorije
            };
            return model;
        }
    }
}
