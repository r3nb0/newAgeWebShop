using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IPaymentService
    {
        Task<CorvusPaymentViewModel> GeneratePaymentUrl(RacunViewModel invoice, OrderViewModel order);
        Task<RacunViewModel> VerifyCorvusPayment(String orderNumber, String signature);
        Task<RacunViewModel> CancelCorvusPayment(String orderNumber);
        Task<RacunViewModel> CheckCorvusTransaction(CorvusManageTransactionViewModel model);
    }
}
