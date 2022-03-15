using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class KupacViewModel
    {
        public KupacViewModel()
        {

        }
        public KupacViewModel(String name, String surname, String email)
        {
            this.Email = email;
            this.Ime = name;
            this.Prezime = surname;
        }
        public KupacViewModel(Kupac k)
        {
            Id = k.Id;
            Ime = k.Ime;
            Prezime = k.Prezime;
            Kontakt = k.Kontakt;
            Email = k.Mail;
            Ulica = k.Ulica;
            KucniBroj = k.KucniBroj;
            PostanskiBroj = k.PostanskiBroj;
            Grad = k.Grad;
        }
        public int Id { get; set; }
        public String Ime { get; set; }
        public String Prezime { get; set; }
        public String Kontakt { get; set; }
        public String Email { get; set; }
        public String Ulica { get; set; }
        public String KucniBroj { get; set; }
        public String Grad { get; set; }
        public String PostanskiBroj { get; set; }
        public bool Izbrisano { get; set; }

        public override string ToString()
        {
            return base.ToString(); 
        }
    }
}
