using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IPopustKodService
    {
        Task<int> Add(PopustKodViewModel pro);
        Task<PopustKodViewModel> Update(int id, PopustKodViewModel pro);
        Task<bool> Delete(int id);
        Task<IEnumerable<PopustKodViewModel>> GetAll();
        Task<IEnumerable<PopustKodViewModel>> GetAllActive();
        Task<PopustKodViewModel> Get(int id);
        Task<PopustKodViewModel> Lookup(string discountCode);
        Task<IEnumerable<PopustKodViewModel>> Valid(DateTime date);
        Task<PopustKodViewModel> GetDiscountForInvoice(String invoiceNumber);
    }
}
