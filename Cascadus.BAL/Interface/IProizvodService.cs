using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IProizvodService
    {
        Task<int> Add(ProizvodViewModel pro);
        Task<ProizvodViewModel> Update(int id, ProizvodViewModel pro);
        Task<bool> Delete(int id);
        Task<IEnumerable<ProizvodViewModel>> GetAll();
        Task<IEnumerable<ProizvodViewModel>> GetAllActive();
        Task<ProizvodViewModel> Get(int pro);
        Task<ProizvodViewModel> GetByName(String name);
    }
}
