﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Cascadus.Model.Models.ViewModels
{
    public class EmailConfiguration
    {
        public string From { get; set; }
        public string SmtpServer { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Port { get; set; }
    }
}