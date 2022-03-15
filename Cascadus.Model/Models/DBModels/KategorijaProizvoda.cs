using System;
using System.Collections.Generic;

namespace Cascadus.Model.Models.DBModels
{
    public partial class KategorijaProizvoda
    {
        public KategorijaProizvoda()
        {
            Proizvod = new HashSet<Proizvod>();
        }

        public int Id { get; set; }
        public string NazivKategorije { get; set; }
        public bool Izbrisano { get; set; }

        public virtual ICollection<Proizvod> Proizvod { get; set; }
    }
}
