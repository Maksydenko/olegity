using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace olegity.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Page",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pageNumb = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Page", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Single_Songs",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    img = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    singer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    genre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    spotifyLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    appleMusicLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    youtubeLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    deezerLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pageID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Single_Songs", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Single_Songs_Page_pageID",
                        column: x => x.pageID,
                        principalTable: "Page",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Single_Songs_pageID",
                table: "Single_Songs",
                column: "pageID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Single_Songs");

            migrationBuilder.DropTable(
                name: "Page");
        }
    }
}
