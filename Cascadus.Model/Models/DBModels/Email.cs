using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Cascadus.Model.Models.DBModels
{
    public partial class Email
    {
        public Email()
        {

        }
        public Email(string email)
        {
            Mail = email;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public String Mail { get; set; }
        public bool Izbrisano { get; set; }
    }
}
