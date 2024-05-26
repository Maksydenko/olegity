using System.Collections.Generic;
using System.Text.Json.Serialization;

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
        public ICollection<LinkEp> LinkEp { get; set; }
        public ICollection<TrackListEp> TrackListEp { get; set; }
        public ICollection<GenreEp> GenreEp { get; set; }
    }
    public class GenreEp
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string translation { get; set; }
        public string text { get; set; }
        [JsonIgnore]
        public int EpId { get; set; }
        public Ep Ep { get; set; }
    }
    public class LinkEp
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string Spotify { get; set; }
        public string AppleMusic { get; set; }
        public string YoutubeMusic { get; set; }
        public string Deezer { get; set; }
        [JsonIgnore]
        public int EpId { get; set; }
        public Ep Ep { get; set; }
    }

    public class TrackListEp
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string title { get; set; }
        [JsonIgnore]
        public int EpId { get; set; }
        public Ep Ep { get; set; }
    }
}