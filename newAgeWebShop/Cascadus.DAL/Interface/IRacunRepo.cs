using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IRacunRepo
    {
        Task<int> DodajAsync(Racun obj);
        Task<Racun> UrediAsync(int id, Racun obj);
        Task<bool> ObrisiAsync(int id);
        List<Racun> DohvatiSve();
        List<Racun> DohvatiAktivne();
        Racun Dohvati(int id);
        List<Racun> DohvatiSveRacuneZaKupca(int kupacId);
        Task<int> DohvatiZadnjiRacunAsync();


    }
}
