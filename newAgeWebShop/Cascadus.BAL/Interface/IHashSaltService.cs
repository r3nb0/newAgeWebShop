using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.BAL.Interface
{
    interface IHashSaltService
    {
        String EncryptText(String text);
        String DecryptText(String text);
    }
}
