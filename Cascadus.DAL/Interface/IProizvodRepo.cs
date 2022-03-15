using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IProizvodRepo
    {
        Task<int> DodajAsync(Proizvod obj);
        Task<Proizvod> UrediAsync(int id, Proizvod obj);
        Task<bool> ObrisiAsync(int id);
        List<Proizvod> DohvatiSve();
        List<Proizvod> DohvatiAktivne();
        Task<Proizvod> DohvatiAsync(int id);
    }
}
