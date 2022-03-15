using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IPopustKodRepo
    {

        int Dodaj(PopustKodovi obj);
        PopustKodovi Uredi(int id, PopustKodovi obj);
        bool Obrisi(int id);
        List<PopustKodovi> DohvatiSve();
        List<PopustKodovi> DohvatiAktivne();
        PopustKodovi Dohvati(int id);
        Task<PopustKodovi> DohvatiPopustKodZaRacun(String brojRacuna);
    }
}
