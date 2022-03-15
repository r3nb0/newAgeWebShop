using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class racunCorvusColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NacinPlacanja",
                table: "Racun",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprovalCode",
                table: "Racun",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Signature",
                table: "Racun",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Racun",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Thumbnail",
                table: "Proizvod",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApprovalCode",
                table: "Racun");

            migrationBuilder.DropColumn(
                name: "Signature",
                table: "Racun");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Racun");

            migrationBuilder.DropColumn(
                name: "Thumbnail",
                table: "Proizvod");

            migrationBuilder.AlterColumn<string>(
                name: "NacinPlacanja",
                table: "Racun",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
