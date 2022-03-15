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
    public class PopustKodService : IPopustKodService
    {

        private readonly IPopustKodRepo _repo;

        public PopustKodService(IPopustKodRepo repo)
        {
            _repo = repo;
        }

        public async Task<int> Add(PopustKodViewModel pro)
        {
            if (pro.PopustUpostocima < 0  || pro.PopustUpostocima > 100)
            {
                throw new Exception("Discount value is out of range. Please use values between 0 and 100.");
            }
            PopustKodovi kod = new PopustKodovi
            {
                Izbrisano = pro.Izbrisano,
                PopustUpostocima = pro.PopustUpostocima,
                VrijediDo = pro.VrijediDo,
                PopustKod = pro.PopustKod
            };

            int resultId = _repo.Dodaj(kod);

            return resultId;
        }

        public async Task<bool> Delete(int id)
        {
            return _repo.Obrisi(id);
        }

        public async Task<PopustKodViewModel> Get(int id)
        {
            var dummy = _repo.Dohvati(id);
            PopustKodViewModel model = new PopustKodViewModel
            {
                Id = dummy.Id,
                Izbrisano = dummy.Izbrisano,
                PopustKod = dummy.PopustKod,
                PopustUpostocima = dummy.PopustUpostocima,
                VrijediDo = dummy.VrijediDo
            };
            return model;
        }

        public async Task<IEnumerable<PopustKodViewModel>> GetAll()
        {
            List<PopustKodViewModel> list = new List<PopustKodViewModel>();
            foreach (var kod in _repo.DohvatiSve())
            {
                list.Add(new PopustKodViewModel
                {
                    Id = kod.Id,
                    Izbrisano = kod.Izbrisano,
                    PopustKod = kod.PopustKod,
                    PopustUpostocima = kod.PopustUpostocima,
                    VrijediDo = kod.VrijediDo
                });
            }
            return list;
        }

        public async Task<IEnumerable<PopustKodViewModel>> GetAllActive()
        {
            List<PopustKodViewModel> list = new List<PopustKodViewModel>();
            foreach (var kod in _repo.DohvatiAktivne())
            {
                list.Add(new PopustKodViewModel
                {
                    Id = kod.Id,
                    Izbrisano = kod.Izbrisano,
                    PopustKod = kod.PopustKod,
                    PopustUpostocima = kod.PopustUpostocima,
                    VrijediDo = kod.VrijediDo
                });
            }
            return list;
        }

        public async Task<IEnumerable<PopustKodViewModel>> Valid(DateTime date)
        {
            List<PopustKodovi> list = _repo.DohvatiSve();
            List<PopustKodViewModel> result = new List<PopustKodViewModel>();
            list.ForEach(pk =>
            {
                if (pk.VrijediDo >= date)
                {
                    result.Add(new PopustKodViewModel 
                    {
                        Id = pk.Id,
                        VrijediDo = pk.VrijediDo,
                        Izbrisano = pk.Izbrisano,
                        PopustKod = pk.PopustKod,
                        PopustUpostocima = pk.PopustUpostocima
                    });
                }
            });
            return result;
        }

        public async Task<PopustKodViewModel> Lookup(string discountCode)
        {
            if (!String.IsNullOrEmpty(discountCode) ||
                !String.IsNullOrWhiteSpace(discountCode))
            {
                var list = _repo.DohvatiAktivne();
                foreach (var kod in list)
                {
                    if (kod.PopustKod == discountCode)
                    {
                        return new PopustKodViewModel 
                        {
                            Id = kod.Id,
                            Izbrisano = kod.Izbrisano,
                            PopustKod = kod.PopustKod,
                            PopustUpostocima = kod.PopustUpostocima,
                            VrijediDo = kod.VrijediDo
                        };
                    }
                }
            }
            return null;
        }

        public async Task<PopustKodViewModel> Update(int id, PopustKodViewModel pro)
        {
            if (pro.PopustUpostocima < 0 || pro.PopustUpostocima > 100)
            {
                throw new Exception("Discount value is out of range. Please use values between 0 and 100.");
            }
            PopustKodovi kod = new PopustKodovi 
            {
                Id = id,
                Izbrisano = pro.Izbrisano,
                PopustKod = pro.PopustKod,
                PopustUpostocima = pro.PopustUpostocima,
                VrijediDo = pro.VrijediDo
            };
            var dummy = _repo.Uredi(id, kod);
            //var dummy = _repo.Dohvati(id);
            PopustKodViewModel model = new PopustKodViewModel 
            {
                Id = id,
                Izbrisano = dummy.Izbrisano,
                PopustKod = dummy.PopustKod,
                VrijediDo = dummy.VrijediDo,
                PopustUpostocima = dummy.PopustUpostocima
            };
            return model;

        }

        public async Task<PopustKodViewModel> GetDiscountForInvoice(string invoiceNumber)
        {
            PopustKodovi obj = new PopustKodovi();
            PopustKodViewModel model = null;
            obj = await _repo.DohvatiPopustKodZaRacun(invoiceNumber);
            if (obj.Id != null)
            {
                model = new PopustKodViewModel(obj);
            }
            return model;
        }
    }
}
