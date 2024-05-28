using Microsoft.EntityFrameworkCore.Migrations;

namespace olegity.Migrations
{
    public partial class test2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NewDeezerColumn",
                table: "LinkAlbum",
                newName: "albumID");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "TrackListAlbum",
                newName: "albumID");

            migrationBuilder.RenameColumn(
                name: "genre",
                table: "TranslationsAlbum",
                newName: "genre");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "TranslationsAlbum",
                newName: "albumID");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NewDeezerColumn",
                table: "LinkAlbum",
                newName: "albumID");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "TrackListAlbum",
                newName: "albumID");

            migrationBuilder.RenameColumn(
                name: "genre",
                table: "TranslationsAlbum",
                newName: "genre");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "TranslationsAlbum",
                newName: "albumID");

        }
    }
}
