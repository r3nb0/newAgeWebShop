using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class RacunViewModel
    {
        public RacunViewModel()
        {

        }
        public RacunViewModel(Racun racun)
        {
            Id = racun.Id;
            KupacId = racun.KupacId;
            Kupac = new KupacViewModel(racun.Kupac);
            Guid = racun.Guid;
            DatumIzdavanja = racun.DatumIzdavanja;
            DatumSlanja = racun.DatumSlanja;
            BrojRacuna = racun.BrojRacuna;
            KomentarNarudzbe = racun.KomentarNarudzbe;
            PracenjePosiljke = racun.PracenjePosiljke;
            NacinPlacanja = racun.NacinPlacanja;
            Status = racun.Status;
            Signature = racun.Signature;
            ApprovalCode = racun.ApprovalCode;
            Stavke = new List<StavkaViewModel>();
            foreach (var item in racun.Stavka)
            {
                Stavke.Add(new StavkaViewModel(item));
            }
        }
        public int Id { get; set; }
        public int KupacId { get; set; }
        public String Guid { get; set; }
        public DateTime DatumIzdavanja { get; set; }
        public DateTime? DatumSlanja { get; set; }
        public String BrojRacuna { get; set; }
        public String KomentarNarudzbe { get; set; }
        public String PracenjePosiljke { get; set; }
        public KupacViewModel Kupac { get; set; }
        public bool Izbrisano { get; set; }
        public ICollection<StavkaViewModel> Stavke { get; set; }
        public String NacinPlacanja { get; set; }
        public String Status { get; set; }
        public String Signature { get; set; }
        public String ApprovalCode { get; set; }
    }
}
