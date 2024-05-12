using olegity.Data.Interfaces;
using olegity.Data.Models;

namespace olegity.Data.mocks
{
    public class MockPage : ISinglesPages
    {
        public IEnumerable<Page> AllPage
        {
            get
            {
                return new List<Page>
                {
                    new Page { pageNumb = "Page_1"},
                    new Page { pageNumb = "Page_2"},
                    new Page { pageNumb = "Page_3"},
                    new Page { pageNumb = "Page_4"},
                    new Page { pageNumb = "Page_5"},
                    new Page { pageNumb = "Page_6"}
                };
            }
        }
    }
}
