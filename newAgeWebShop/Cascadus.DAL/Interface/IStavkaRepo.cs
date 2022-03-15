using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IStavkaRepo
    {
        Task<int> Dodaj(Stavka obj);
        Stavka Uredi(int id, Stavka obj);
        bool Obrisi(int id);
        List<Stavka> DohvatiSve();
        List<Stavka> DohvatiAktivne();
        Stavka Dohvati(int id);
        List<Stavka> DohvatiSveStavkeZaRacun(int racunId);

    }
}
