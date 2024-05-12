using olegity.Data.Interfaces;
using olegity.Data.Models;

namespace olegity.Data.Repository
{
    public class PageRepository : ISinglesPages
    {
        private readonly AppDBContent appDBContent;
        public PageRepository(AppDBContent appDBContent)
        {
            this.appDBContent = appDBContent;
        }
        public IEnumerable<Page> AllPage => appDBContent.Page;
    }
}
