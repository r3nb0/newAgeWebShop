using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KategorijaProizvoda",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivKategorije = table.Column<string>(nullable: true),
                    Izbrisano = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KategorijaProizvoda", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "KorisnickiRacun",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KorisnickoIme = table.Column<string>(nullable: true),
                    Lozinka = table.Column<string>(nullable: true),
                    Uloga = table.Column<string>(nullable: true),
                    Izbrisano = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KorisnickiRacun", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PopustKodovi",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PopustKod = table.Column<string>(nullable: false),
                    PopustUPostocima = table.Column<int>(nullable: false),
                    Izbrisano = table.Column<bool>(nullable: true),
                    VrijediDo = table.Column<DateTime>(type: "datetime", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PopustKodovi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Proizvod",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KategorijaID = table.Column<int>(nullable: true),
                    Naziv = table.Column<string>(nullable: false),
                    Putanja = table.Column<string>(nullable: true),
                    KarakteristikeProizvoda = table.Column<string>(nullable: false),
                    OpisProizvoda = table.Column<string>(nullable: true),
                    Cijena = table.Column<decimal>(type: "decimal(19, 4)", nullable: true),
                    BrojProdanihKomada = table.Column<int>(nullable: true),
                    Izbrisano = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proizvod", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Proizvod__Katego__412EB0B6",
                        column: x => x.KategorijaID,
                        principalTable: "KategorijaProizvoda",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Kupac",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KorisnickiRacunID = table.Column<int>(nullable: true),
                    Ime = table.Column<string>(maxLength: 50, nullable: false),
                    Prezime = table.Column<string>(maxLength: 50, nullable: false),
                    Ulica = table.Column<string>(maxLength: 50, nullable: false),
                    KucniBroj = table.Column<string>(maxLength: 10, nullable: false),
                    Grad = table.Column<string>(maxLength: 50, nullable: false),
                    PostanskiBroj = table.Column<string>(maxLength: 50, nullable: false),
                    Mail = table.Column<string>(maxLength: 50, nullable: true),
                    Kontakt = table.Column<string>(maxLength: 20, nullable: false),
                    Izbrisano = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kupac", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Kupac__Korisnick__398D8EEE",
                        column: x => x.KorisnickiRacunID,
                        principalTable: "KorisnickiRacun",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Racun",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumIzdavanja = table.Column<DateTime>(type: "date", nullable: true),
                    BrojRacuna = table.Column<int>(nullable: true),
                    KupacID = table.Column<int>(nullable: true),
                    PracenjePosiljke = table.Column<string>(nullable: true),
                    DatumSlanja = table.Column<DateTime>(type: "date", nullable: true),
                    KomentarNarudzbe = table.Column<string>(nullable: true),
                    Izbrisano = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Racun", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Racun__KupacID__3C69FB99",
                        column: x => x.KupacID,
                        principalTable: "Kupac",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Stavka",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RacunID = table.Column<int>(nullable: true),
                    ProizvodID = table.Column<int>(nullable: true),
                    Kolicina = table.Column<int>(nullable: true),
                    CijenaPoKomadu = table.Column<decimal>(type: "decimal(19, 4)", nullable: true),
                    UkupnaCijena = table.Column<decimal>(type: "decimal(19, 4)", nullable: true),
                    Izbrisano = table.Column<bool>(nullable: true),
                    PopustKodID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stavka", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Stavka__PopustKo__52593CB8",
                        column: x => x.PopustKodID,
                        principalTable: "PopustKodovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Stavka__Proizvod__44FF419A",
                        column: x => x.ProizvodID,
                        principalTable: "Proizvod",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK__Stavka__RacunID__440B1D61",
                        column: x => x.RacunID,
                        principalTable: "Racun",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Kupac_KorisnickiRacunID",
                table: "Kupac",
                column: "KorisnickiRacunID");

            migrationBuilder.CreateIndex(
                name: "IX_Proizvod_KategorijaID",
                table: "Proizvod",
                column: "KategorijaID");

            migrationBuilder.CreateIndex(
                name: "IX_Racun_KupacID",
                table: "Racun",
                column: "KupacID");

            migrationBuilder.CreateIndex(
                name: "IX_Stavka_PopustKodID",
                table: "Stavka",
                column: "PopustKodID");

            migrationBuilder.CreateIndex(
                name: "IX_Stavka_ProizvodID",
                table: "Stavka",
                column: "ProizvodID");

            migrationBuilder.CreateIndex(
                name: "IX_Stavka_RacunID",
                table: "Stavka",
                column: "RacunID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stavka");

            migrationBuilder.DropTable(
                name: "PopustKodovi");

            migrationBuilder.DropTable(
                name: "Proizvod");

            migrationBuilder.DropTable(
                name: "Racun");

            migrationBuilder.DropTable(
                name: "KategorijaProizvoda");

            migrationBuilder.DropTable(
                name: "Kupac");

            migrationBuilder.DropTable(
                name: "KorisnickiRacun");
        }
    }
}
