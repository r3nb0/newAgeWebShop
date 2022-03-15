using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class dbchangestotablekupac : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Kupac",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "Kupac",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));
        }
    }
}
