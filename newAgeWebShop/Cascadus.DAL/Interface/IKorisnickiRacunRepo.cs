using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IKorisnickiRacunRepo
    {
        KorisnickiRacun Login(String username, String password);
        Task<int> DodajAsync(KorisnickiRacun obj);
        Task<KorisnickiRacun> UrediAsync(int id, KorisnickiRacun obj);
        Task<bool> ObrisiAsync(int id);
        List<KorisnickiRacun> DohvatiSve();
        List<KorisnickiRacun> DohvatiAktivne();
        KorisnickiRacun Dohvati(int id);
    }
}
