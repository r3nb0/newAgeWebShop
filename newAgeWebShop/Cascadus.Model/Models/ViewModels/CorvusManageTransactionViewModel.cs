using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class CorvusManageTransactionViewModel
    {
        public int StoreId { get; set; }
        public String OrderNumber { get; set; }
        public String Hash { get; set; }

        public CorvusManageTransactionViewModel()
        {

        }
        public CorvusManageTransactionViewModel(String orderNumber)
        {
            StoreId = Configuration.Configuration.CORVUSPAY_STORE_ID;
            OrderNumber = orderNumber;
            Hash = GetHash();
        }
        private String GetHash()
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(Configuration.Configuration.CORVUSPAY_SECURITY_KEY + OrderNumber + StoreId));
                var sb = new StringBuilder(hash.Length * 2);

                foreach (byte b in hash)
                {
                    // can be "x2" if you want lowercase
                    sb.Append(b.ToString("x2"));
                }
                return sb.ToString();
            }
        }
    }
}
