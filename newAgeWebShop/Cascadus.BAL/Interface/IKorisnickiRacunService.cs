using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IKorisnickiRacunService
    {
        Task<KorisnickiRacunViewModel> Login(LoginPodaciViewModel loginPodaci);
        Task<KorisnickiRacunViewModel> Register(LoginPodaciViewModel user);
        Task<List<KorisnickiRacunViewModel>> GetAllKorisnickiRacuni();
        Task<List<KorisnickiRacunViewModel>> GetAllActiveKorisnickiRacuni();
        Task<KorisnickiRacunViewModel> GetKorisnickiRacun(int id);
        Task<List<KorisnickiRacunViewModel>> GetKorisnickiRacuniWithRole(String role);

    }
}
