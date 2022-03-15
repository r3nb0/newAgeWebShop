using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Proizvod__Katego__412EB0B6",
                table: "Proizvod");

            migrationBuilder.DropForeignKey(
                name: "FK__Racun__KupacID__3C69FB99",
                table: "Racun");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__PopustKo__52593CB8",
                table: "Stavka");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__Proizvod__44FF419A",
                table: "Stavka");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__RacunID__440B1D61",
                table: "Stavka");

            migrationBuilder.AlterColumn<decimal>(
                name: "UkupnaCijena",
                table: "Stavka",
                type: "decimal(19, 4)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RacunID",
                table: "Stavka",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProizvodID",
                table: "Stavka",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PopustKodID",
                table: "Stavka",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Kolicina",
                table: "Stavka",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Stavka",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "CijenaPoKomadu",
                table: "Stavka",
                type: "decimal(19, 4)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "KupacID",
                table: "Racun",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Racun",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumIzdavanja",
                table: "Racun",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "date",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "BrojRacuna",
                table: "Racun",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Guid",
                table: "Racun",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "KategorijaID",
                table: "Proizvod",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Proizvod",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Cijena",
                table: "Proizvod",
                type: "decimal(19, 4)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "BrojProdanihKomada",
                table: "Proizvod",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "VrijediDo",
                table: "PopustKodovi",
                type: "datetime",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "PopustKodovi",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "KategorijaProizvoda",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK__Proizvod__Katego__412EB0B6",
                table: "Proizvod",
                column: "KategorijaID",
                principalTable: "KategorijaProizvoda",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Racun__KupacID__3C69FB99",
                table: "Racun",
                column: "KupacID",
                principalTable: "Kupac",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__PopustKo__52593CB8",
                table: "Stavka",
                column: "PopustKodID",
                principalTable: "PopustKodovi",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__Proizvod__44FF419A",
                table: "Stavka",
                column: "ProizvodID",
                principalTable: "Proizvod",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__RacunID__440B1D61",
                table: "Stavka",
                column: "RacunID",
                principalTable: "Racun",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK__Proizvod__Katego__412EB0B6",
                table: "Proizvod");

            migrationBuilder.DropForeignKey(
                name: "FK__Racun__KupacID__3C69FB99",
                table: "Racun");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__PopustKo__52593CB8",
                table: "Stavka");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__Proizvod__44FF419A",
                table: "Stavka");

            migrationBuilder.DropForeignKey(
                name: "FK__Stavka__RacunID__440B1D61",
                table: "Stavka");

            migrationBuilder.DropColumn(
                name: "Guid",
                table: "Racun");

            migrationBuilder.AlterColumn<decimal>(
                name: "UkupnaCijena",
                table: "Stavka",
                type: "decimal(19, 4)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)");

            migrationBuilder.AlterColumn<int>(
                name: "RacunID",
                table: "Stavka",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ProizvodID",
                table: "Stavka",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "PopustKodID",
                table: "Stavka",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "Kolicina",
                table: "Stavka",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Stavka",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<decimal>(
                name: "CijenaPoKomadu",
                table: "Stavka",
                type: "decimal(19, 4)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)");

            migrationBuilder.AlterColumn<int>(
                name: "KupacID",
                table: "Racun",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Racun",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumIzdavanja",
                table: "Racun",
                type: "date",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "date");

            migrationBuilder.AlterColumn<int>(
                name: "BrojRacuna",
                table: "Racun",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "KategorijaID",
                table: "Proizvod",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Proizvod",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<decimal>(
                name: "Cijena",
                table: "Proizvod",
                type: "decimal(19, 4)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(19, 4)");

            migrationBuilder.AlterColumn<int>(
                name: "BrojProdanihKomada",
                table: "Proizvod",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<DateTime>(
                name: "VrijediDo",
                table: "PopustKodovi",
                type: "datetime",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime");

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "PopustKodovi",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "KategorijaProizvoda",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AddForeignKey(
                name: "FK__Proizvod__Katego__412EB0B6",
                table: "Proizvod",
                column: "KategorijaID",
                principalTable: "KategorijaProizvoda",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK__Racun__KupacID__3C69FB99",
                table: "Racun",
                column: "KupacID",
                principalTable: "Kupac",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__PopustKo__52593CB8",
                table: "Stavka",
                column: "PopustKodID",
                principalTable: "PopustKodovi",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__Proizvod__44FF419A",
                table: "Stavka",
                column: "ProizvodID",
                principalTable: "Proizvod",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK__Stavka__RacunID__440B1D61",
                table: "Stavka",
                column: "RacunID",
                principalTable: "Racun",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
