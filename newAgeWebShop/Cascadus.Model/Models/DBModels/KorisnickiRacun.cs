using System;
using System.Collections.Generic;

namespace Cascadus.Model.Models.DBModels
{
    public partial class KorisnickiRacun
    {
        public KorisnickiRacun()
        {
            Kupac = new HashSet<Kupac>();
        }

        public int Id { get; set; }
        public string KorisnickoIme { get; set; }
        public string Lozinka { get; set; }
        public string Uloga { get; set; }
        public bool? Izbrisano { get; set; }

        public virtual ICollection<Kupac> Kupac { get; set; }
    }
}
