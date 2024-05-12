using olegity.Data.Models;
using System.ComponentModel;

namespace olegity.Data
{
    public class DBObjects
    {
        public static void initial(AppDBContent content)
        {

            if (content.Page.Any()) 
                content.Page.AddRange(Pages.Select(c => c.Value));

            if (content.Single_Songs.Any())
            {
                content.AddRange( );


            }
            content.SaveChanges();

        }

        private static Dictionary<string, Page> pages;
        public static Dictionary<string, Page> Pages
        { 
            get
            {
                if (pages == null)
                {
                    var list = new Page[]
                    {
                    new Page { pageNumb = "Page_1"},
                    new Page { pageNumb = "Page_2"},
                    new Page { pageNumb = "Page_3"},
                    new Page { pageNumb = "Page_4"},
                    new Page { pageNumb = "Page_5"},
                    new Page { pageNumb = "Page_6"}
                    };

                    pages = new Dictionary<string, Page>();
                    foreach (Page el in list) 
                    { 
                        pages.Add(el.pageNumb, el);
                    }  
                }
                return pages;
            }
        }
    }
}
