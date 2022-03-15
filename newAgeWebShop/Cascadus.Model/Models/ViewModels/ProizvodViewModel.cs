using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class ProizvodViewModel
    {
        public ProizvodViewModel()
        {

        }
        public ProizvodViewModel(Proizvod proizvod)
        {
            Id = proizvod.Id;
            Thumbnail = proizvod.Thumbnail;
            Opis = proizvod.OpisProizvoda;
            Izbrisano = proizvod.Izbrisano;
            Karakteristike = proizvod.KarakteristikeProizvoda;
            KategorijaId = proizvod.KategorijaId;
            Kategorija = proizvod.Kategorija.NazivKategorije;
            Naziv = proizvod.Naziv;
            Putanja = proizvod.Putanja;
            Kolicina = proizvod.Kolicina;
            Cijena = proizvod.Cijena;
        }
        public int Id { get; set; }
        public int KategorijaId { get; set; }
        public String Naziv { get; set; }
        public String Kategorija { get; set; }
        public String Putanja { get; set; }
        public String Karakteristike { get; set; }
        public String Opis { get; set; }
        public String Thumbnail { get; set; }
        public Decimal Cijena { get; set; }
        public int Kolicina { get; set; }
        public bool Izbrisano { get; set; }
    }
}
