using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class CorvusPaymentViewModel
    {
        public CorvusPaymentViewModel()
        {
        }

        public CorvusPaymentViewModel(String orderNumber, float amount, String cart)
        {
            OrderNumber = orderNumber;
            Amount = amount;
            Cart = cart;
            ReadConfiguration();
            InitParameters();
        }
        public CorvusPaymentViewModel(String orderNumber, float amount, String cart, KupacViewModel buyer)
        {
            OrderNumber = orderNumber;
            Amount = amount;
            Cart = cart;
            kupacViewModel = buyer;
            ReadConfiguration();
            InitParameters();
        }


        public KupacViewModel kupacViewModel { get; set; }
        public float Amount { get; set; }
        public String CardholderName { get; set; }
        public String CardholderSurname { get; set; }
        public String CardholderEmail { get; set; }
        public String CardholderCountryCode { get; set; }
        public String Cart { get; set; }
        public String Currency { get; set; }
        public String HideTabs { get; set; }
        public String Language { get; set; }
        public String OrderNumber { get; set; }
        public String RequireComplete { get; set; }
        public int StoreId { get; set; }
        public String Version { get; set; }
        public String Signature { get; set; }
        public String PaymentUrl { get; set; }
        public List<KeyValuePair<String, object>> Parameters { get; set; }
        public String Hash { get; set; }

        private void ReadConfiguration()
        {
            Version = Configuration.Configuration.CORVUSPAY_VERSION;
            StoreId = Configuration.Configuration.CORVUSPAY_STORE_ID;
            Language = Configuration.Configuration.CORVUSPAY_LANGUAGE;
            Currency = Configuration.Configuration.CORVUSPAY_CURRENCY;
            HideTabs = Configuration.Configuration.CORVUSPAY_HIDE_TABS;
            RequireComplete = Configuration.Configuration.CORVUSPAY_REQUIRE_COMPLETE;
            if (kupacViewModel != null)
            {
                CardholderName = kupacViewModel.Ime;
                CardholderSurname = kupacViewModel.Prezime;
                CardholderEmail = kupacViewModel.Email;
            CardholderCountryCode = Configuration.Configuration.CORVUSPAY_COUNTRY;
            }
        }

        private void InitParameters()
        {
            Parameters = new List<KeyValuePair<string, object>>();

            /*
            if (kupacViewModel != null)
            {
                Parameters.Add(new KeyValuePair<String, object>("cardholder_name", CardholderName));
                Parameters.Add(new KeyValuePair<String, object>("cardholder_surname", CardholderSurname));
                Parameters.Add(new KeyValuePair<String, object>("cardholder_email", CardholderEmail));
            Parameters.Add(new KeyValuePair<String, object>("cardholder_country_code", CardholderCountryCode));
            }
            */
            Parameters.Add(new KeyValuePair<String, object>("amount", Amount));
            Parameters.Add(new KeyValuePair<String, object>("cart", Cart));
            Parameters.Add(new KeyValuePair<String, object>("currency", Currency));
            //Parameters.Add(new KeyValuePair<String, object>("hide_tabs", HideTabs));
            Parameters.Add(new KeyValuePair<String, object>("language", Language));
            Parameters.Add(new KeyValuePair<String, object>("order_number", OrderNumber));
            Parameters.Add(new KeyValuePair<String, object>("require_complete", RequireComplete));
            Parameters.Add(new KeyValuePair<String, object>("store_id", StoreId));
            Parameters.Add(new KeyValuePair<String, object>("version", Version));
            Signature = GetSignature();
            Parameters.Add(new KeyValuePair<String, object>("signature", Signature));
            Hash = GetHash();
            PaymentUrl = Configuration.Configuration.CORVUSPAY_CHECKOUT_URL;
        }

        private String GetSignature()
        {
            String signatureString = CalculateSignatureString();
            String signatureHash = HmacSha256Digest(signatureString, Configuration.Configuration.CORVUSPAY_SECURITY_KEY);
            Console.WriteLine("SignatureString: " + signatureString);
            Console.WriteLine("SignatureHash: " + signatureHash);
            return signatureHash;
        }

        private String HmacSha256Digest(String text, String securityKey)
        {
            var encoding = new ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(securityKey);

            byte[] messageBytes = encoding.GetBytes(text);
            using (var hmacsha256 = new HMACSHA256(keyByte))
            {
                var hash = new HMACSHA256(keyByte);
                byte[] signature1 = hash.ComputeHash(messageBytes);
                return BitConverter.ToString(signature1).Replace("-", "").ToLower();
            }
        }

        private String CalculateSignatureString()
        {
            StringBuilder sb = new StringBuilder();
            Parameters.Sort((x, y) => x.Key.CompareTo(y.Key));

            Parameters.ForEach(key => {
                Console.WriteLine(key.Key.ToString() + ":" + key.Value.ToString());
                sb.Append(key.Key.ToString() + key.Value.ToString());
            });
            return sb.ToString();
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            Parameters.ForEach((key) =>
            {
                sb.Append(key.Key + key.Value);
            });
            return sb.ToString();
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
