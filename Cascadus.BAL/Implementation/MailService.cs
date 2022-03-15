using Cascadus.BAL.Interface;
using Cascadus.DAL.Implementation;
using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Implementation
{
    public class MailService : IMailService
    {
        private readonly EmailConfiguration _mailSettings;
        private readonly IEmailRepo _emailRepo;

        public MailService(EmailConfiguration mailSettings, EmailRepository emailRepo)
        {
            _mailSettings = mailSettings;
            _emailRepo = emailRepo;
        }

        public void SendEmail(Message message)
        {
            var emailMessage = CreateEmailMessage(message);
            Send(emailMessage);
        }

        private void Send(MimeMessage emailMessage)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(_mailSettings.SmtpServer, _mailSettings.Port, false);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate(_mailSettings.Username, _mailSettings.Password);
                    client.Send(emailMessage);
                }
                catch (Exception e)
                {
                    throw;
                }
                finally 
                {
                    client.Disconnect(true);
                    client.Dispose();
                }

            }
        }

        private MimeMessage CreateEmailMessage(Message message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(MailboxAddress.Parse(_mailSettings.From));
            emailMessage.Importance = MessageImportance.Normal;
            emailMessage.To.AddRange(message.To);
            emailMessage.Subject = message.Subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = message.Content };

            return emailMessage;
        }

        public async Task SendEmailAsync(Message message)
        {
            var mailMessage = CreateEmailMessage(message);
            await SendAsync(mailMessage);
        }
        private async Task SendAsync(MimeMessage mailMessage)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    await client.ConnectAsync(_mailSettings.SmtpServer, _mailSettings.Port, false);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    await client.AuthenticateAsync(_mailSettings.Username, _mailSettings.Password);
                    await client.SendAsync(mailMessage);
                }
                catch (Exception e)
                {
                    throw new Exception("Sending email failed! Message: " + e.Message + "\n" + "Stack trace: " + e.StackTrace);
                }
                finally
                {
                    await client.DisconnectAsync(true);
                    client.Dispose();
                }
            }
        }


        public async Task<bool> Subscribe(String email)
        {
            return await _emailRepo.Subscribe(email);
        }

        public async Task<bool> Unsubscribe(string email)
        {
            return await _emailRepo.Unsubscribe(email);
        }

        public async Task<IEnumerable<Email>> GetActiveEmails()
        {
            return await _emailRepo.GetActive();
        }

        public async Task<int> SendBulkEmail(Message message, List<String> addresses)
        {
            foreach (string address in addresses)
            {
                message.To.Add(new MailboxAddress(address));
            }
            SendEmail(message);
            return addresses.Count;
        }
    }
}
