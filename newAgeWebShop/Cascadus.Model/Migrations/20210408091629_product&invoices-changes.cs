using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class productinvoiceschanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojProdanihKomada",
                table: "Proizvod");

            migrationBuilder.AddColumn<string>(
                name: "NacinPlacanja",
                table: "Racun",
                nullable: false);

            migrationBuilder.AddColumn<int>(
                name: "Kolicina",
                table: "Proizvod",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NacinPlacanja",
                table: "Racun");

            migrationBuilder.DropColumn(
                name: "Kolicina",
                table: "Proizvod");

            migrationBuilder.AddColumn<int>(
                name: "BrojProdanihKomada",
                table: "Proizvod",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
