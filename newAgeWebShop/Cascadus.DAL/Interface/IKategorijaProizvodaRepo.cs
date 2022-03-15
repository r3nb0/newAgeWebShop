using Cascadus.Model.Models.DBModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cascadus.DAL.Interface
{
    public interface IKategorijaProizvodaRepo
    {
        Task<int> DodajAsync(KategorijaProizvoda obj);
        Task<KategorijaProizvoda> UrediAsync(int id, KategorijaProizvoda obj);
        Task<bool> ObrisiAsync(int id);
        KategorijaProizvoda Dohvati(int id);
        List<KategorijaProizvoda> DohvatiSve();
        List<KategorijaProizvoda> DohvatiAktivne();
    }
}
