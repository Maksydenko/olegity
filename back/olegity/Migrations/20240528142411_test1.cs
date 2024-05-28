using Microsoft.EntityFrameworkCore.Migrations;

namespace olegity.Migrations
{
    public partial class test1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "TranslationsAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "TrackListAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "LinkAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "LinkAlbum",
                newName: "NewDeezerColumn");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "TranslationsAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "TrackListAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "LinkAlbum",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "LinkAlbum",
                newName: "albumID");

        }
    }
}
