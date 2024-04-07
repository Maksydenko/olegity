namespace olegity.Data.Models
{
    public class Single_Song
    {
        public int ID { set; get; }

        public string name { set; get; }

        public string img { set; get; }

        public string singer { set; get; }

        public string genre { set; get; }

        public string spotifyLink { set; get; }

        public string appleMusicLink { set; get; }

        public string youtubeLink { set; get; }

        public string deezerLink { set; get; }

        public int pageID { set; get; }

        public virtual Page Page { set; get; }
    }
}
