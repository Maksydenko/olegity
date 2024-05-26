using System.Text.Json.Serialization;

namespace olegity.Data.Models
{
    public class Single_Song
    { 
        public int ID { set; get; }

        public int year { set; get; }

        public string title { set; get; }

        public string img { set; get; }

        public string artist { set; get; }

        public string genre { set; get; }

        public string spotify { set; get; }

        public string appleMusic { set; get; }

        public string youtubeMusic { set; get; }

        public string deezer { set; get; }

        public int pageID { set; get; }

        [JsonIgnore]
        public virtual Page Page { set; get; }
    }


}
