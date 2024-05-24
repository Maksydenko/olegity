using System.Text.Json.Serialization;

namespace olegity.Data.Models
{
    public class Album
    {
        public int ID { set; get; }
        public string slug { set; get; }

        public string title { set; get; }

        public string img { set; get; }

        public string singer { set; get; }

        public string genre { set; get; }

        public string spotifyLink { set; get; }

        public string appleMusicLink { set; get; }

        public string youtubeLink { set; get; }

        public string deezerLink { set; get; }

        public string year { set; get; }

        public string tracklist { set; get; }

        public int pageID { set; get; }

    }
}