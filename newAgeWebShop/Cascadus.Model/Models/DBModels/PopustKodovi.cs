using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cascadus.Model.Models.DBModels
{
    public partial class PopustKodovi
    {
        public PopustKodovi()
        {
            Stavka = new HashSet<Stavka>();
        }

        public int Id { get; set; }
        public string PopustKod { get; set; }
        public int PopustUpostocima { get; set; }
        public bool Izbrisano { get; set; }
        public DateTime VrijediDo { get; set; }
        public virtual ICollection<Stavka> Stavka { get; set; }
    }
}
