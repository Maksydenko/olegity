using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace olegity.Migrations.AboutDBContentMigrations
{
    /// <inheritdoc />
    public partial class fix11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "img",
                table: "AboutSections");

            migrationBuilder.CreateTable(
                name: "VideoAbout",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sectionID = table.Column<int>(type: "int", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    link = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutSectionsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MediaAbout", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MediaAbout_AboutSections_AboutSectionsID",
                        column: x => x.AboutSectionsID,
                        principalTable: "AboutSections",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MediaAbout_AboutSectionsID",
                table: "VideoAbout",
                column: "AboutSectionsID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VideoAbout");

            migrationBuilder.AddColumn<string>(
                name: "img",
                table: "AboutSections",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
