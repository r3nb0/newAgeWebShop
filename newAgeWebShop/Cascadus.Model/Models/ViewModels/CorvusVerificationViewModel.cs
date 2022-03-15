using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class CorvusVerificationViewModel
    {
        public String OrderNumber { get; set; }
        public String Signature { get; set; }
        public String Language { get; set; }
        public String ApprovalCode { get; set; }
    }
}
