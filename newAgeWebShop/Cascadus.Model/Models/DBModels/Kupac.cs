using System;
using System.Collections.Generic;

namespace Cascadus.Model.Models.DBModels
{
    public partial class Kupac
    {
        public Kupac()
        {
            Racun = new HashSet<Racun>();
        }

        public int Id { get; set; }
        public int? KorisnickiRacunId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Ulica { get; set; }
        public string KucniBroj { get; set; }
        public string Grad { get; set; }
        public string PostanskiBroj { get; set; }
        public string Mail { get; set; }
        public string Kontakt { get; set; }
        public bool Izbrisano { get; set; }

        public virtual KorisnickiRacun KorisnickiRacun { get; set; }
        public virtual ICollection<Racun> Racun { get; set; }
    }
}
