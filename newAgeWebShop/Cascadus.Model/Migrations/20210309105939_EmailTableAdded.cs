using Microsoft.EntityFrameworkCore.Migrations;

namespace Cascadus.Model.Migrations
{
    public partial class EmailTableAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "PopustKodovi",
                type: "bit(1)",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.CreateTable(
                name: "Emails",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mail = table.Column<string>(nullable: true),
                    Izbrisano = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emails", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emails");

            migrationBuilder.AlterColumn<bool>(
                name: "Izbrisano",
                table: "PopustKodovi",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit(1)");
        }
    }
}
