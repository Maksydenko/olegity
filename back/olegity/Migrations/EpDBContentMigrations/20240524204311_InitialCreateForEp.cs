using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace olegity.Migrations.EpDBContentMigrations
{
    /// <inheritdoc />
    public partial class InitialCreateForEp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ep",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    slug = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    img = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    singer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    genre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    spotifyLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    appleMusicLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    youtubeLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    deezerLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    year = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tracklist = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pageID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ep", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ep");
        }
    }
}
