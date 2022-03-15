using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Cascadus.Model.Models.DBModels
{
    public partial class Racun
    {
        public Racun()
        {
            Stavka = new HashSet<Stavka>();
        }

        public int Id { get; set; }
        public DateTime DatumIzdavanja { get; set; }
        public String BrojRacuna { get; set; }
        public int KupacId { get; set; }
        public string PracenjePosiljke { get; set; }
        public DateTime? DatumSlanja { get; set; }
        public string KomentarNarudzbe { get; set; }
        public bool Izbrisano { get; set; }
        public string Guid { get; set; }
        [Required]
        public string NacinPlacanja { get; set; }
        public string Status { get; set; }
        public string Signature { get; set; }
        public string ApprovalCode { get; set; }
        public virtual Kupac Kupac { get; set; }
        public virtual ICollection<Stavka> Stavka { get; set; }
    }
}
