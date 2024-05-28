using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace olegity.Migrations.AboutDBContentMigrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AboutSections",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sectionID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutSections", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "TranslationsAbout",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    translation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    text = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    sectionID = table.Column<int>(type: "int", nullable: false),
                    AboutSectionsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TranslationsAbout", x => x.ID);
                    table.ForeignKey(
                        name: "FK_TranslationsAbout_AboutSections_AboutSectionsID",
                        column: x => x.AboutSectionsID,
                        principalTable: "AboutSections",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TranslationsAbout_AboutSectionsID",
                table: "TranslationsAbout",
                column: "AboutSectionsID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TranslationsAbout");

            migrationBuilder.DropTable(
                name: "AboutSections");
        }
    }
}
