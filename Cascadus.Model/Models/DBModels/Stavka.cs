using System;
using System.Collections.Generic;

namespace Cascadus.Model.Models.DBModels
{
    public partial class Stavka
    {
        public int Id { get; set; }
        public int RacunId { get; set; }
        public int ProizvodId { get; set; }
        public int Kolicina { get; set; }
        public decimal CijenaPoKomadu { get; set; }
        public decimal UkupnaCijena { get; set; }
        public bool Izbrisano { get; set; }
        public int PopustKodId { get; set; }

        public virtual PopustKodovi PopustKod { get; set; }
        public virtual Proizvod Proizvod { get; set; }
        public virtual Racun Racun { get; set; }
    }
}
