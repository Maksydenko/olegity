using Microsoft.EntityFrameworkCore;
using olegity.Data.Models;

namespace olegity.Data
{
    public class AppDBContent :DbContext
    {
        public AppDBContent(DbContextOptions<AppDBContent> options) : base (options)
        { 
            
        }
        
        public DbSet<Single_Song> Single_Songs { get; set; }
        public DbSet<Page> Page {  get; set; }

    }
}
