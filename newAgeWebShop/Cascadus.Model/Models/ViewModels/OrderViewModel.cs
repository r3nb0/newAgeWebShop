using Cascadus.Model.Helpers;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Cascadus.Model.Models.ViewModels
{
    public class OrderViewModel
    {
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Contact { get; set; }
        public String Email { get; set; }
        public String Street{ get; set; }
        public String HouseNumber { get; set; }
        public String City { get; set; }
        public String PostNumber { get; set; }
        public String DiscountCode { get; set; }
        public String OrderComment { get; set; }
        public PaymentViewModel PaymentModel { get; set; }
        public int OrderNumber { get; set; }
    }
}
