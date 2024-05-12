using Microsoft.EntityFrameworkCore;
using olegity.Data.Interfaces;
using olegity.Data.Models;
using System.Diagnostics.Tracing;

namespace olegity.Data.Repository
{
    public class SingleRepository : IAllSingles
    {
        private readonly AppDBContent appDBContent;
        public SingleRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }


        public IEnumerable<Single_Song> single_Songs => appDBContent.Single_Songs.Include(c => c.Page);

        public IEnumerable<Single_Song> Singles => appDBContent.Single_Songs.Include(c => c.Page);

        public Single_Song getObject(int singleID)
        {
            throw new NotImplementedException();
        }
    }
}
