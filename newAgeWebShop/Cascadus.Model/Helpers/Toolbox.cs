using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace Cascadus.Model.Helpers
{
    public static class Toolbox
    {
        public static bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        internal static bool ValidatePhoneNumber(string phone, bool isRequired)
        {
            if (string.IsNullOrEmpty(phone) & !isRequired)
                return true;

            if (string.IsNullOrEmpty(phone) & isRequired)
                return false;

            var cleaned = RemoveNonNumeric(phone);
            if (isRequired)
            {
                if (cleaned.Length == 10 || cleaned.Length == 9)
                    return true;
                else
                    return false;
            }
            else
            {
                if (cleaned.Length == 0)
                    return true;
                else if (cleaned.Length > 0 & cleaned.Length < 10)
                    return false;
                else if (cleaned.Length == 10)
                    return true;
                else
                    return false; // should never get here
            }
        }

        internal static bool ValidateEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public static String RemoveNonNumeric(this string phone)
        {
            return Regex.Replace(phone, @"[^0-9]+", "");
        }

        public static bool ValidateOrder(OrderViewModel model)
        {
            if (String.IsNullOrEmpty(model.Name) ||
                String.IsNullOrWhiteSpace(model.Name) ||
                String.IsNullOrEmpty(model.Surname) ||
                String.IsNullOrWhiteSpace(model.Surname) ||
                String.IsNullOrEmpty(model.Contact) ||
                String.IsNullOrWhiteSpace(model.Contact) ||
                Toolbox.ValidatePhoneNumber(model.Contact, true) ||
                Toolbox.ValidateEmail(model.Email) ||
                String.IsNullOrEmpty(model.Street) ||
                String.IsNullOrWhiteSpace(model.Street) ||
                String.IsNullOrEmpty(model.HouseNumber) ||
                String.IsNullOrWhiteSpace(model.HouseNumber) ||
                String.IsNullOrEmpty(model.City) ||
                String.IsNullOrWhiteSpace(model.City) ||
                String.IsNullOrEmpty(model.PostNumber) ||
                String.IsNullOrWhiteSpace(model.PostNumber) ||
                String.IsNullOrEmpty(model.PaymentModel.PaymentMethod) ||
                String.IsNullOrWhiteSpace(model.PaymentModel.PaymentMethod) ||
                model.PaymentModel.Cart.Count <=0 ||
                model.PaymentModel.Amount <= 1)
            {
                return false;
            }
            return true;
        }


    }
}
