using Cascadus.Model.Models.DBModels;

namespace Cascadus.Model.Models.ViewModels
{
    public class StavkaViewModel
    {
        public StavkaViewModel()
        {

        }
        public StavkaViewModel(Stavka item)
        {
            Id = item.Id;
            RacunId = item.RacunId;
            ProizvodId = item.ProizvodId;
            PopustKodId = item.PopustKodId;
            Kolicina = item.Kolicina;
            CijenaPoKomadu = item.CijenaPoKomadu;
            UkupnaCijena = item.UkupnaCijena;
            Izbrisano = item.Izbrisano;
        }

        public int Id { get; set; }
        public int RacunId { get; set; }
        public int ProizvodId { get; set; }
        public int Kolicina { get; set; }
        public decimal CijenaPoKomadu { get; set; }
        public decimal UkupnaCijena { get; set; }
        public bool Izbrisano { get; set; }
        public int PopustKodId { get; set; }
        public PopustKodViewModel PopustKod { get; set; }
        public ProizvodViewModel Proizvod { get; set; }
    }
}