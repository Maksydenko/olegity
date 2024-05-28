namespace olegity.Data.Models
{
    public class Single_Song
    {
        public int ID { set; get; }

        public int year { set; get; }

        public string title { set; get; }

        public string img { set; get; }

        public string artist { set; get; }

        public string spotify { set; get; }

        public string appleMusic { set; get; }

        public string youtubeMusic { set; get; }

        public string deezer { set; get; }

        public int pageID { set; get; }

        public int genreID { set; get; }

        public ICollection<TranslationsSingle> TranslationsSingle { get; set; }
    }
    public class TranslationsSingle
    {
        public int ID { get; set; }
        public string translation { get; set; }
        public string genre { get; set; }
        public int genreID { get; set; }


    }
}
