using Cascadus.Model.Models.DBModels;
using System;

namespace Cascadus.Model.Models.ViewModels
{
    public class PopustKodViewModel
    {
        public PopustKodViewModel()
        {

        }
        public PopustKodViewModel(PopustKodovi obj)
        {
            Id = obj.Id;
            PopustKod = obj.PopustKod;
            PopustUpostocima = obj.PopustUpostocima;
            Izbrisano = obj.Izbrisano;
            VrijediDo = obj.VrijediDo;
        }

        public int Id { get; set; }
        public string PopustKod { get; set; }
        public int PopustUpostocima { get; set; }
        public bool Izbrisano { get; set; }
        public DateTime VrijediDo { get; set; }
    }
}