using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Implementation
{
    public class EmailRepository : IEmailRepo
    {
        public async Task<List<Email>> GetActive()
        {
            List<Email> list = new List<Email>();
            using (CascadusDEVContext db = new CascadusDEVContext())
            {
                foreach (var item in db.Emails)
                {
                    list.Add(new Email(item.Mail));
                }

            }
            return list;
        }

        public async Task<Email> GetByEmail(String email)
        {
            Email response = null;
            using (CascadusDEVContext db = new CascadusDEVContext())
            {
                foreach (var item in db.Emails)
                {
                    if (item.Mail == email)
                    {
                        response = item;
                    }
                }
            }
            return response;
        }

        public async Task<bool> RemoveByEmail(String email)
        {
            using (CascadusDEVContext db = new CascadusDEVContext())
            {
                var emails = await GetActive();
                var mail = emails.Find(x => x.Mail == email);
                if (mail != null)
                {
                    mail.Izbrisano = true;
                    db.Emails.Update(mail);
                    await db.SaveChangesAsync();
                }
                mail = await GetByEmail(email);
                if (mail != null && mail.Izbrisano == true)
                {
                    return true;
                }
                return false;
            }
        }

        public async Task<bool> Subscribe(String email)
        {
            using (CascadusDEVContext db = new CascadusDEVContext())
            {

                var dummy = await GetByEmail(email);
                if (dummy != null)
                {
                    return false;
                }
                else if (dummy != null && dummy.Izbrisano == true)
                {
                    db.Emails.Find(dummy).Izbrisano = false;
                    db.Emails.Update(dummy);
                    await db.SaveChangesAsync();
                    return true;
                }
                else if (dummy == null)
                {
                    Email mail = new Email(email);
                    db.Emails.Add(mail);
                    await db.SaveChangesAsync();
                    return true;
                }
                throw new Exception("Unable to subscribe!");
            }
        }

        public async Task<bool> Unsubscribe(string email)
        {
            return await RemoveByEmail(email);
        }
    }
}
