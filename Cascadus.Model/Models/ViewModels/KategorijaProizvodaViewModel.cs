using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class KategorijaProizvodaViewModel
    {
        public int Id { get; set; }
        public String Naziv { get; set; }
        public bool Izbrisano { get; set; }
    }
}
