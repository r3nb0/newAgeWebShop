using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class PaymentViewModel
    {
        public float Amount { get; set; }
        public IList<MyKeyValuePair<object, String>> Cart { get; set; }
        public String PaymentMethod { get; set; }
        public String GetFormattedCartItems()
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < Cart.Count; i++)
            {
                var item = Cart[i];

                sb.Append(String.Format($"{item.Key} x{item.Value}kom"));
                if (i != Cart.Count - 1)
                {
                    sb.Append(",");
                }
            }
            return sb.ToString();
        }

    }
    public class MyKeyValuePair<K, V>
    {
        public MyKeyValuePair()
        {

        }
        public MyKeyValuePair(K key, V value)
        {
            this.Key = key;
            this.Value = value;
        }
        public K Key { get; set; }
        public V Value { get; set; }
    }
}
