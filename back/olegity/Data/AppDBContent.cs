using Microsoft.EntityFrameworkCore;
using olegity.Data.Models;

namespace olegity.Data
{
    public class AppDBContent : DbContext
    {
        public AppDBContent(DbContextOptions<AppDBContent> options) : base(options)
        {
        }

        public DbSet<Single_Song> Single_Songs { get; set; }
        public DbSet<Page> Page { get; set; }
    }
        public class AlbumsDBContent : DbContext
        {
            public AlbumsDBContent(DbContextOptions<AlbumsDBContent> options) : base(options)
            {
            }

            public DbSet<Album> Albums { get; set; }
        }

        public class EpDBContent : DbContext
        {
            public EpDBContent(DbContextOptions<EpDBContent> options) : base(options)
            {
            }

            public DbSet<Ep> Ep { get; set; }
        }
    }
