using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IMailService
    {
        Task SendEmailAsync(Message message);
        void SendEmail(Message message);
        Task<bool> Subscribe(String email);
        Task<bool> Unsubscribe(String email);
        Task<IEnumerable<Email>> GetActiveEmails();
        Task<int> SendBulkEmail(Message message, List<String> addresses);
    }
}
