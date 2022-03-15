using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IKupacService
    {
        Task<int> Add(KupacViewModel kup);
        Task<KupacViewModel> Update(int id, KupacViewModel kup);
        Task<bool> Delete(int id);
        Task<IEnumerable<KupacViewModel>> GetAll();
        Task<IEnumerable<KupacViewModel>> GetAllActive();
        Task<KupacViewModel> Get(int id);
    }
}
