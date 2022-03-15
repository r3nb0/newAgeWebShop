using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IKupacRepo
    {
        Task<int> DodajAsync(Kupac obj);
        Task<Kupac> UrediAsync(int id, Kupac obj);
        Task<bool> ObrisiAsync(int id);
        List<Kupac> DohvatiSve();
        List<Kupac> DohvatiAktivne();
        Kupac Dohvati(int id);

    }
}
