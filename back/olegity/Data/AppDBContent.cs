using Microsoft.EntityFrameworkCore;
using olegity.Data.Models;

namespace olegity.Data
{
    public class SinglesDBContent : DbContext
    {
        public SinglesDBContent(DbContextOptions<SinglesDBContent> options) : base(options)
        {
        }

        public DbSet<Single_Song> Single_Songs { get; set; }
        public DbSet<GenreList> GenreList { get; set; }
    }

    public class AlbumsDBContent : DbContext
    {
        public AlbumsDBContent(DbContextOptions<AlbumsDBContent> options) : base(options)
        {
        }
        public DbSet<Album> Album { get; set; }
        public DbSet<LinkAlbum> LinkAlbum { get; set; }
        public DbSet<TrackListAlbum> TrackListAlbum { get; set; }
        public DbSet<GenreAlbum> GenreAlbum { get; set; }
    }

    public class EpDBContent : DbContext
    {
        public EpDBContent(DbContextOptions<EpDBContent> options) : base(options)
        {
        }

        public DbSet<Ep> Ep { get; set; }
        public DbSet<LinkEp> LinkEp { get; set; }
        public DbSet<TrackListEp> TrackListEp { get; set; }
        public DbSet<GenreEp> GenreEp { get; set; }
    }
}
