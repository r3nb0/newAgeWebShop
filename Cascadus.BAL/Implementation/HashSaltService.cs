using Cascadus.BAL.Interface;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Cascadus.BAL.Implementation
{
    public class HashSaltService : IHashSaltService
    {
        public string EncryptText(string text)
        {
            //step one
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            //step two
            var pbkdf2 = new Rfc2898DeriveBytes(text, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);

            //step three
            byte[] hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            //step four
            string savedPasswordHash = Convert.ToBase64String(hashBytes);
            return savedPasswordHash;


        }

        public string DecryptText(string text)
        {
            /* Fetch the stored value */
            string savedPasswordHash = text;
            /* Extract the bytes */
            byte[] hashBytes = Convert.FromBase64String(savedPasswordHash);
            /* Get the salt */
            byte[] salt = new byte[16];
            Array.Copy(hashBytes, 0, salt, 0, 16);
            /* Compute the hash on the password the user entered */
            var pbkdf2 = new Rfc2898DeriveBytes(text, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);
            /* Compare the results */
            for (int i = 0; i < 20; i++)
            {
                if (hashBytes[i + 16] != hash[i])
                {
                    throw new UnauthorizedAccessException();
                }
            }
            return "a";
        }
    }
}
