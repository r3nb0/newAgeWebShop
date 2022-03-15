using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IEmailRepo
    {
        Task<Email> GetByEmail(String email);
        Task<List<Email>> GetActive();
        Task<bool> RemoveByEmail(String email);
        Task<bool> Subscribe(String email);
        Task<bool> Unsubscribe(String email);
    }
}
