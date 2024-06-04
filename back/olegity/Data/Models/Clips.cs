using System.Text.Json.Serialization;

namespace olegity.Data.Models
{
    public class Clips
    {
        public int ID { set; get; }
        [JsonIgnore]
        public int ClipsID { set; get; }
        public int pageID { set; get; }
        public string img { get; set; }
        public ICollection<VideoClips> Video { get; set; }
    }

    public class VideoClips
    {
        public int ID { get; set; }
        [JsonIgnore]
        public int ClipsID { set; get; }
        public int musicVideoID { get; set; }
        public string title { get; set; }
        public string link { get; set; }
        public Clips Clips { get; set; }
    }
}
