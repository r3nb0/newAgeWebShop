using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public enum CartResponseStatusCodes
    {
        SUCCESS,
        FAIL,
        PENDING
    }
    public class CartResponse
    {
        public CartResponse(string buyerName, String invoiceId, CartResponseStatusCodes statusCode)
        {
            BuyerId = buyerName;
            InvoiceId = invoiceId;
            StatusCode = statusCode;
        }
        public CartResponse(string buyerName, String invoiceId, CartResponseStatusCodes statusCode, String paymentUrl, List<KeyValuePair<string, object>> parameters)
        {
            BuyerId = buyerName;
            InvoiceId = invoiceId;
            StatusCode = statusCode;
            PaymentUrl = paymentUrl;
            Parameters = parameters;
        }

        public String BuyerId { get; set; }
        public String InvoiceId { get; set; }
        public CartResponseStatusCodes StatusCode { get; set; }
        public String PaymentUrl { get; set; }
        public List<KeyValuePair<string, object>> Parameters { get; set; }
    }
}
