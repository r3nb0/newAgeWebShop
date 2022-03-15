using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IStavkaService
    {
        Task<int> AddItemForInvoice(int invoiceId, StavkaViewModel model);
        Task<IEnumerable<StavkaViewModel>> GetItemsForInvoice(int invoiceId);
        Task<StavkaViewModel> GetItem(int itemId);

    }
}
