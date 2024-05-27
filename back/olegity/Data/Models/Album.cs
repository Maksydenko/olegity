namespace olegity.Data.Models
{
    public class Album
    {
        public int ID { set; get; }
        public string slug { set; get; }
        public string title { set; get; }
        public string img { set; get; }
        public string artist { set; get; }
        public string year { set; get; }
        public int pageID { set; get; }
        public ICollection<LinkAlbum> Links { get; set; }
        public ICollection<TrackListAlbum> TrackList { get; set; }
        public ICollection<GenreAlbum> Genre { get; set; }
    }
    public class GenreAlbum
    {
        public int Id { get; set; }
        public string translation { get; set; }
        public string text { get; set; }
        public int AlbumId { get; set; }
        public Album Album { get; set; }
    }
    public class LinkAlbum
    {

        public int Id { get; set; }
        public string Spotify { get; set; }
        public string AppleMusic { get; set; }
        public string YoutubeMusic { get; set; }
        public string Deezer { get; set; }
        public int AlbumId { get; set; }
        public Album Album { get; set; }
    }

    public class TrackListAlbum
    {
        public int Id { get; set; }
        public string title { get; set; }
        public int AlbumId { get; set; }
        public Album Album { get; set; }
    }
}