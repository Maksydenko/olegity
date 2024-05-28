namespace olegity.Data.Models
{
    public class Ep
    {
        public int ID { set; get; }
        public string slug { set; get; }
        public string title { set; get; }
        public string img { set; get; }
        public string artist { set; get; }
        public string year { set; get; }
        public int pageID { set; get; }
        public ICollection<LinkEp> Links { get; set; }
        public ICollection<TrackListEp> TrackList { get; set; }
        public ICollection<TranslationsEp> Translations { get; set; }
    }
    public class TranslationsEp
    {
        public int ID { get; set; }
        public string translation { get; set; }
        public string genre { get; set; }
        public int epID { get; set; }
        public Ep Ep { get; set; }
    }
    public class LinkEp
    {
        public int ID { get; set; }
        public string Spotify { get; set; }
        public string AppleMusic { get; set; }
        public string YoutubeMusic { get; set; }
        public string Deezer { get; set; }
        public int epID { get; set; }
        public Ep Ep { get; set; }
    }

    public class TrackListEp
    {
        public int ID { get; set; }
        public string title { get; set; }
        public int epID { get; set; }
        public Ep Ep { get; set; }
    }
}