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
        public DbSet<TranslationsSingle> TranslationsSingle { get; set; }
    }

    public class AlbumsDBContent : DbContext
    {
        public AlbumsDBContent(DbContextOptions<AlbumsDBContent> options) : base(options)
        {
        }
        public DbSet<Album> Album { get; set; }
        public DbSet<LinkAlbum> LinkAlbum { get; set; }
        public DbSet<TrackListAlbum> TrackListAlbum { get; set; }
        public DbSet<TranslationsAlbum> TranslationsAlbum { get; set; }
    }

    public class EpDBContent : DbContext
    {
        public EpDBContent(DbContextOptions<EpDBContent> options) : base(options)
        {
        }

        public DbSet<Ep> Ep { get; set; }
        public DbSet<LinkEp> LinkEp { get; set; }
        public DbSet<TrackListEp> TrackListEp { get; set; }
        public DbSet<TranslationsEp> TranslationsEp { get; set; }
    }

    public class AboutDBContent : DbContext
    {
        public AboutDBContent(DbContextOptions<AboutDBContent> options) : base(options)
        {
        }

        public DbSet<AboutSections> AboutSections { get; set; }
        public DbSet<TranslationsAbout> TranslationsAbout { get; set; }
        public DbSet<VideoAbout> VideoAbout { get; set; }
    }

    public class ConcertsDBContent : DbContext
    {
        public ConcertsDBContent(DbContextOptions<ConcertsDBContent> options) : base(options)
        {
        }

        public DbSet<Сoncerts> Сoncerts { get; set; }


    }

    public class ClipsDBContent : DbContext
    {
        public ClipsDBContent(DbContextOptions<ClipsDBContent> options) : base(options)
        {
        }

        public DbSet<Clips> Clips { get; set; }

        public DbSet<VideoClips> VideoClips { get; set; }

    }

    public class AnimatedDBContent : DbContext
    {
        public AnimatedDBContent(DbContextOptions<AnimatedDBContent> options) : base(options)
        {
        }

        public DbSet<AnimatedClips> AnimatedClips { get; set; }

        public DbSet<Animated> Animated { get; set; }

    }

    
}
