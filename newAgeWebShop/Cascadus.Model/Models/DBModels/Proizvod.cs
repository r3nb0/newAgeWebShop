using System;
using System.Collections.Generic;

namespace Cascadus.Model.Models.DBModels
{
    public partial class Proizvod
    {
        public Proizvod()
        {
            Stavka = new HashSet<Stavka>();
        }

        public int Id { get; set; }
        public int KategorijaId { get; set; }
        public string Naziv { get; set; }
        public string Putanja { get; set; }
        public string Thumbnail { get; set; }
        public string KarakteristikeProizvoda { get; set; }
        public string OpisProizvoda { get; set; }
        public decimal Cijena { get; set; }
        public int Kolicina { get; set; }
        public bool Izbrisano { get; set; }

        public virtual KategorijaProizvoda Kategorija { get; set; }
        public virtual ICollection<Stavka> Stavka { get; set; }
    }
}
