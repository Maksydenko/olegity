using Microsoft.EntityFrameworkCore.Migrations;

namespace olegity.Migrations
{
    public partial class test11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "GenreEp",
                newName: "TranslationsEp");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "TranslationsEp",
                newName: "GenreEp");
        }
    }
}