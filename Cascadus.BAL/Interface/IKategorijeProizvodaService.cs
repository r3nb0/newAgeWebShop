using Cascadus.Model.Models.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cascadus.BAL.Interface
{
    public interface IKategorijeProizvodaService
    {
        Task<int> Add(KategorijaProizvodaViewModel pro);
        Task<KategorijaProizvodaViewModel> Update(int id, KategorijaProizvodaViewModel pro);
        Task<bool> Delete(int id);
        Task<IEnumerable<KategorijaProizvodaViewModel>> GetAll();
        Task<IEnumerable<KategorijaProizvodaViewModel>> GetAllActive();
        Task<KategorijaProizvodaViewModel> Get(int id);
    }
}
