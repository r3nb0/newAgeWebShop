using Cascadus.BAL.Interface;
using Cascadus.DAL.Interface;
using Cascadus.Model.Models.DBModels;
using Cascadus.Model.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cascadus.BAL.Implementation
{
    public class RacunService : IRacunService
    {
        private readonly IRacunRepo _repo;
        public RacunService(IRacunRepo repo)
        {
            _repo = repo;
        }
        public async Task<int> Add(RacunViewModel viewModel)
        {
            int id = 0;
            String guid = Guid.NewGuid().ToString();
            Racun racun = new Racun
            {
                BrojRacuna = "ORDER_" + guid.Replace("-","").ToString().Substring(0, 8),
                DatumIzdavanja = DateTime.Now,
                DatumSlanja = null,
                Izbrisano = false,
                KomentarNarudzbe = viewModel.KomentarNarudzbe,
                KupacId = viewModel.KupacId,
                Guid = Guid.NewGuid().ToString(),
                PracenjePosiljke = "",
                NacinPlacanja = viewModel.NacinPlacanja,
                Status = viewModel.Status,
                Signature = viewModel.Signature,
                ApprovalCode = viewModel.ApprovalCode
            };
            id = await _repo.DodajAsync(racun);
            return id;
        }

        public async Task<bool> Delete(int id)
        {
            return await _repo.ObrisiAsync(id);
        }

        public async Task<RacunViewModel> Get(int id)
        {
            Racun racun = new Racun();
            racun = _repo.Dohvati(id);
            if (racun == null)
            {
                return null;
            }
            RacunViewModel model = new RacunViewModel();
            model.Id = racun.Id;
            model.Guid = racun.Guid;
            model.DatumIzdavanja = racun.DatumIzdavanja;
            if (!racun.DatumSlanja.HasValue)
            {
                model.DatumSlanja = null;
            }
            model.BrojRacuna = racun.BrojRacuna;
            model.Izbrisano = racun.Izbrisano;
            model.KomentarNarudzbe = racun.KomentarNarudzbe;
            if (racun.PracenjePosiljke == null)
            {
                model.PracenjePosiljke = "";
            }
            model.KupacId = racun.KupacId;
            model.Kupac = new KupacViewModel(racun.Kupac);
            model.Stavke = new List<StavkaViewModel>();

            //status, signature and approvalCode
            model.NacinPlacanja = racun.NacinPlacanja;
            model.Status = racun.Status;
            model.Signature = racun.Signature;
            model.ApprovalCode = racun.ApprovalCode;

            //Decimal total = 0;
            foreach (var s in racun.Stavka)
            {
                var pk = new PopustKodViewModel
                {
                    Id = s.PopustKodId,
                    PopustKod = s.PopustKod.PopustKod,
                    Izbrisano = s.PopustKod.Izbrisano,
                    PopustUpostocima = s.PopustKod.PopustUpostocima,
                    VrijediDo = s.PopustKod.VrijediDo
                };

                var pro = new ProizvodViewModel
                {
                    Id = s.ProizvodId,
                    Kolicina = s.Proizvod.Kolicina,
                    Cijena = s.Proizvod.Cijena,
                    Izbrisano = s.Proizvod.Izbrisano,
                    Karakteristike = s.Proizvod.KarakteristikeProizvoda,
                    KategorijaId = s.Proizvod.KategorijaId,
                    Naziv = s.Proizvod.Naziv,
                    Opis = s.Proizvod.OpisProizvoda,
                    Putanja = s.Proizvod.Putanja
                };
                //total += (s.CijenaPoKomadu * s.Kolicina) * (s.PopustKod.PopustUpostocima / 100);

                StavkaViewModel svm = new StavkaViewModel();
                svm.Id = s.Id;
                svm.CijenaPoKomadu = s.CijenaPoKomadu;
                svm.Izbrisano = s.Izbrisano;
                svm.Kolicina = s.Kolicina;
                svm.PopustKodId = s.PopustKodId;
                svm.PopustKod = pk;
                svm.ProizvodId = s.ProizvodId;
                svm.Proizvod = pro;
                svm.RacunId = s.RacunId;
                svm.UkupnaCijena = s.UkupnaCijena;
                model.Stavke.Add(svm);
            }
            return model;
        }

        public async Task<int> GetNextInvoiceNumber()
        {
            return await _repo.DohvatiZadnjiRacunAsync();
        }

        public async Task<IEnumerable<RacunViewModel>> GetAll()
        {
            List<RacunViewModel> list = new List<RacunViewModel>();
            foreach (var racun in _repo.DohvatiSve())
            {
                RacunViewModel r = new RacunViewModel
                {
                    Id = racun.Id,
                    BrojRacuna = racun.BrojRacuna,
                    DatumIzdavanja = racun.DatumIzdavanja,
                    Guid = racun.Guid,
                    Izbrisano = racun.Izbrisano,
                    KomentarNarudzbe = racun.KomentarNarudzbe,
                    Kupac = new KupacViewModel(racun.Kupac),
                    KupacId = racun.KupacId,
                    PracenjePosiljke = racun.PracenjePosiljke,
                    Stavke = new List<StavkaViewModel>(),
                    Status = racun.Status,
                    Signature = racun.Signature,
                    ApprovalCode = racun.ApprovalCode
                };

                if (!racun.DatumSlanja.HasValue)
                {
                    r.DatumSlanja = null;
                }
                else
                {
                    r.DatumSlanja = racun.DatumSlanja;
                }
                foreach (var stavka in racun.Stavka)
                {
                    StavkaViewModel svm = new StavkaViewModel
                    {
                        Id = stavka.Id,
                        CijenaPoKomadu = stavka.CijenaPoKomadu,
                        Izbrisano = stavka.Izbrisano,
                        Kolicina = stavka.Kolicina,
                        PopustKodId = stavka.PopustKodId,
                        ProizvodId = stavka.ProizvodId,
                        RacunId = stavka.RacunId,
                        UkupnaCijena = stavka.UkupnaCijena
                    };

                    PopustKodViewModel pkvm = new PopustKodViewModel
                    {
                        Id = stavka.PopustKodId,
                        Izbrisano = stavka.PopustKod.Izbrisano,
                        PopustUpostocima = stavka.PopustKod.PopustUpostocima,
                        PopustKod = stavka.PopustKod.PopustKod,
                        VrijediDo = stavka.PopustKod.VrijediDo
                    };

                    svm.PopustKod = pkvm;

                    ProizvodViewModel pvm = new ProizvodViewModel
                    {
                        Id = stavka.ProizvodId,
                        Naziv = stavka.Proizvod.Naziv,
                        Kolicina = stavka.Proizvod.Kolicina,
                        Cijena = stavka.Proizvod.Cijena,
                        Izbrisano = stavka.Proizvod.Izbrisano,
                        Opis = stavka.Proizvod.OpisProizvoda,
                        Karakteristike = stavka.Proizvod.KarakteristikeProizvoda
                    };
                    svm.Proizvod = pvm;
                    r.Stavke.Add(svm);
                }
                list.Add(r);
            }
            return list;
        }

        public async Task<IEnumerable<RacunViewModel>> GetAllActive()
        {

            List<RacunViewModel> list = new List<RacunViewModel>();
            foreach (var racun in _repo.DohvatiAktivne())
            {
                RacunViewModel r = new RacunViewModel
                {
                    Id = racun.Id,
                    BrojRacuna = racun.BrojRacuna,
                    DatumIzdavanja = racun.DatumIzdavanja,
                    Guid = racun.Guid,
                    Izbrisano = racun.Izbrisano,
                    KomentarNarudzbe = racun.KomentarNarudzbe,
                    Kupac = new KupacViewModel(racun.Kupac),
                    KupacId = racun.KupacId,
                    PracenjePosiljke = racun.PracenjePosiljke,
                    Stavke = new List<StavkaViewModel>(),
                    Status = racun.Status,
                    Signature = racun.Signature,
                    ApprovalCode = racun.ApprovalCode
                };

                if (!racun.DatumSlanja.HasValue)
                {
                    r.DatumSlanja = null;
                }
                else
                {
                    r.DatumSlanja = racun.DatumSlanja;
                }
                foreach (var stavka in racun.Stavka)
                {
                    StavkaViewModel svm = new StavkaViewModel
                    {
                        Id = stavka.Id,
                        CijenaPoKomadu = stavka.CijenaPoKomadu,
                        Izbrisano = stavka.Izbrisano,
                        Kolicina = stavka.Kolicina,
                        PopustKodId = stavka.PopustKodId,
                        ProizvodId = stavka.ProizvodId,
                        RacunId = stavka.RacunId,
                        UkupnaCijena = stavka.UkupnaCijena
                    };

                    PopustKodViewModel pkvm = new PopustKodViewModel
                    {
                        Id = stavka.PopustKodId,
                        Izbrisano = stavka.PopustKod.Izbrisano,
                        PopustUpostocima = stavka.PopustKod.PopustUpostocima,
                        PopustKod = stavka.PopustKod.PopustKod,
                        VrijediDo = stavka.PopustKod.VrijediDo
                    };

                    svm.PopustKod = pkvm;

                    ProizvodViewModel pvm = new ProizvodViewModel
                    {
                        Id = stavka.ProizvodId,
                        Naziv = stavka.Proizvod.Naziv,
                        Kolicina = stavka.Proizvod.Kolicina,
                        Cijena = stavka.Proizvod.Cijena,
                        Izbrisano = stavka.Proizvod.Izbrisano,
                        Opis = stavka.Proizvod.OpisProizvoda,
                        Karakteristike = stavka.Proizvod.KarakteristikeProizvoda
                    };
                    svm.Proizvod = pvm;
                    r.Stavke.Add(svm);
                }
                list.Add(r);
            }
            return list;
        }

        public async Task<RacunViewModel> Update(int id, RacunViewModel viewModel)
        {
            Racun racun = new Racun
            {
                BrojRacuna = viewModel.BrojRacuna,
                DatumIzdavanja = viewModel.DatumIzdavanja,
                DatumSlanja = viewModel.DatumSlanja,
                Guid = viewModel.Guid,
                Izbrisano = viewModel.Izbrisano,
                KomentarNarudzbe = viewModel.KomentarNarudzbe,
                KupacId = viewModel.KupacId,
                PracenjePosiljke = viewModel.PracenjePosiljke,
                Status = viewModel.Status,
                Signature = viewModel.Signature,
                ApprovalCode = viewModel.ApprovalCode,
                NacinPlacanja = viewModel.NacinPlacanja
            };

            var dummy = await _repo.UrediAsync(id, racun);
            RacunViewModel model = new RacunViewModel
            {
                Id = dummy.Id,
                BrojRacuna = dummy.BrojRacuna,
                DatumIzdavanja = dummy.DatumIzdavanja,
                Guid = dummy.Guid,
                Izbrisano = dummy.Izbrisano,
                KomentarNarudzbe = dummy.KomentarNarudzbe,
                KupacId = dummy.KupacId,
                PracenjePosiljke = dummy.PracenjePosiljke,
                ApprovalCode = dummy.ApprovalCode,
                Signature = dummy.Signature,
                Status = dummy.Status,
                NacinPlacanja = dummy.NacinPlacanja
            };
            if (dummy.DatumSlanja.HasValue)
            {
                model.DatumSlanja = dummy.DatumSlanja.Value;
            }
            foreach (var s in dummy.Stavka)
            {
                StavkaViewModel svm = new StavkaViewModel
                {
                    Id = s.Id,
                    CijenaPoKomadu = s.CijenaPoKomadu,
                    Izbrisano = s.Izbrisano,
                    Kolicina = s.Kolicina,
                    PopustKodId = s.PopustKodId,
                    ProizvodId = s.ProizvodId,
                    RacunId = racun.Id,
                    UkupnaCijena = s.UkupnaCijena
                };
                if (s.PopustKodId != 0)
                {
                    svm.PopustKodId = s.PopustKodId;

                    PopustKodViewModel pkvm = new PopustKodViewModel
                    {
                        Id = s.PopustKodId,
                        Izbrisano = s.Izbrisano,
                        PopustKod = s.PopustKod.PopustKod,
                        PopustUpostocima = s.PopustKod.PopustUpostocima,
                        VrijediDo = s.PopustKod.VrijediDo
                    };
                    svm.PopustKod = pkvm;

                }
                    ProizvodViewModel pvm = new ProizvodViewModel
                    {
                        Id = s.ProizvodId,
                        Kolicina = s.Proizvod.Kolicina,
                        Cijena = s.Proizvod.Cijena,
                        Izbrisano = s.Proizvod.Izbrisano,
                        Karakteristike = s.Proizvod.KarakteristikeProizvoda,
                        Naziv = s.Proizvod.Naziv,
                        Opis = s.Proizvod.OpisProizvoda
                    };
                    if (s.Proizvod.KategorijaId != 0)
                    {
                        pvm.KategorijaId = s.Proizvod.KategorijaId;
                        pvm.Kategorija = s.Proizvod.Kategorija.NazivKategorije;

                    }
                    svm.Proizvod = pvm;
                model.Stavke.Add(svm);
            }
            return model;
        }

        public async Task<IEnumerable<RacunViewModel>> GetInvoicesForBuyerId(int id)
        {
            List<RacunViewModel> list = new List<RacunViewModel>();
            foreach (var racun in _repo.DohvatiSveRacuneZaKupca(id))
            {
                RacunViewModel r = new RacunViewModel
                {
                    Id = racun.Id,
                    BrojRacuna = racun.BrojRacuna,
                    DatumIzdavanja = racun.DatumIzdavanja,
                    Guid = racun.Guid,
                    Izbrisano = racun.Izbrisano,
                    KomentarNarudzbe = racun.KomentarNarudzbe,
                    Kupac = new KupacViewModel(racun.Kupac),
                    KupacId = racun.KupacId,
                    PracenjePosiljke = racun.PracenjePosiljke,
                    Stavke = new List<StavkaViewModel>(),
                    Status = racun.Status,
                    ApprovalCode = racun.ApprovalCode,
                    Signature = racun.Signature
                };

                if (!racun.DatumSlanja.HasValue)
                {
                    r.DatumSlanja = null;
                }
                else
                {
                    r.DatumSlanja = racun.DatumSlanja;
                }
                foreach (var stavka in racun.Stavka)
                {
                    StavkaViewModel svm = new StavkaViewModel
                    {
                        Id = stavka.Id,
                        CijenaPoKomadu = stavka.CijenaPoKomadu,
                        Izbrisano = stavka.Izbrisano,
                        Kolicina = stavka.Kolicina,
                        PopustKodId = stavka.PopustKodId,
                        ProizvodId = stavka.ProizvodId,
                        RacunId = stavka.RacunId,
                        UkupnaCijena = stavka.UkupnaCijena
                    };

                    PopustKodViewModel pkvm = new PopustKodViewModel
                    {
                        Id = stavka.PopustKodId,
                        Izbrisano = stavka.PopustKod.Izbrisano,
                        PopustUpostocima = stavka.PopustKod.PopustUpostocima,
                        PopustKod = stavka.PopustKod.PopustKod,
                        VrijediDo = stavka.PopustKod.VrijediDo
                    };

                    svm.PopustKod = pkvm;

                    ProizvodViewModel pvm = new ProizvodViewModel
                    {
                        Id = stavka.ProizvodId,
                        Naziv = stavka.Proizvod.Naziv,
                        Kolicina = stavka.Proizvod.Kolicina,
                        Cijena = stavka.Proizvod.Cijena,
                        Izbrisano = stavka.Proizvod.Izbrisano,
                        Opis = stavka.Proizvod.OpisProizvoda,
                        Karakteristike = stavka.Proizvod.KarakteristikeProizvoda
                    };
                    svm.Proizvod = pvm;
                    r.Stavke.Add(svm);
                }
                list.Add(r);
            }
            return list;
        }

        public async Task<RacunViewModel> GetInvoiceByInvoiceNumber(String invoiceNumber)
        {
            RacunViewModel model = new RacunViewModel();
            Racun racun = new Racun();
            racun = _repo.DohvatiAktivne().Find(x => x.BrojRacuna == invoiceNumber);
            if (racun != null && racun != new Racun())
            {
                model = new RacunViewModel(racun);
                return model;
            }
            return null;
        }

    }
}
