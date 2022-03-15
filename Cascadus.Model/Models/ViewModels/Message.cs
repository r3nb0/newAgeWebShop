using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Mail;
using MimeKit;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace Cascadus.Model.Models.ViewModels
{
    public class Message
    {
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public IFormFileCollection Attachments { get; set; }
        public Message(IEnumerable<MailboxAddress> to, string subject, string content, IFormFileCollection attachments)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(x => new MailboxAddress(x.Address.ToString())));
            Subject = subject;
            Content = content;
            Attachments = attachments;
        }
    }
}
