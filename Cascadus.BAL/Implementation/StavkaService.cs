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
    public class StavkaService : IStavkaService
    {
        private readonly IStavkaRepo _repo;
        public StavkaService(IStavkaRepo repo)
        {
            _repo = repo;
        }
        public async Task<int> AddItemForInvoice(int invoiceId, StavkaViewModel model)
        {
            Stavka item = new Stavka
            {
                Izbrisano = false,
                Kolicina = model.Kolicina,
                CijenaPoKomadu = model.CijenaPoKomadu,
                PopustKodId = model.PopustKodId,
                RacunId = invoiceId,
                ProizvodId = model.ProizvodId,
                UkupnaCijena = model.UkupnaCijena                
            };
            return await _repo.Dodaj(item);
        }

        public async Task<StavkaViewModel> GetItem(int itemId)
        {
            var dummy = _repo.Dohvati(itemId);

            StavkaViewModel model = new StavkaViewModel 
            { 
                Id = dummy.Id,
                CijenaPoKomadu = dummy.CijenaPoKomadu,
                Izbrisano = dummy.Izbrisano,
                Kolicina = dummy.Kolicina,
                PopustKodId = dummy.PopustKodId,
                ProizvodId = dummy.ProizvodId,
                RacunId = dummy.RacunId,
                UkupnaCijena = dummy.UkupnaCijena
            };
            return model;
        }

        public async Task<IEnumerable<StavkaViewModel>> GetItemsForInvoice(int invoiceId)
        {
            List<StavkaViewModel> list = new List<StavkaViewModel>();
            foreach (var i in _repo.DohvatiSveStavkeZaRacun(invoiceId))
            {
                StavkaViewModel model = new StavkaViewModel 
                {
                    Id = i.Id,
                    CijenaPoKomadu = i.CijenaPoKomadu,
                    Izbrisano = i.Izbrisano,
                    Kolicina = i.Kolicina,
                    PopustKodId = i.PopustKodId,
                    ProizvodId = i.ProizvodId,
                    RacunId = i.RacunId,
                    UkupnaCijena = i.UkupnaCijena,
                    
                };
                list.Add(model);
            }
            return list;
        }
    }
}
