using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IRacunService
    {
        Task<int> Add(RacunViewModel viewModel);
        Task<RacunViewModel> Update(int id, RacunViewModel viewModel);
        Task<bool> Delete(int id);
        Task<IEnumerable<RacunViewModel>> GetAll();
        Task<IEnumerable<RacunViewModel>> GetAllActive();
        Task<RacunViewModel> Get(int id);
        Task<int> GetNextInvoiceNumber();
        Task<IEnumerable<RacunViewModel>> GetInvoicesForBuyerId(int id);
        Task<RacunViewModel> GetInvoiceByInvoiceNumber(String invoiceNumber);
    }
}
