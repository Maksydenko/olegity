using olegity.Data.Models;
using System.Text.Json.Serialization;

namespace olegity.ViewPages
{
    public class SingelsListViewPages
    {
        public IEnumerable<Single_Song> AllSingles {  get; set; }
        public string SinggPage {  get; set; }  

    }
}
