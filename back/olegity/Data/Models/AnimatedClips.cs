using System.Text.Json.Serialization;

namespace olegity.Data.Models
{
    public class AnimatedClips
    {
        public int ID { set; get; }
        [JsonIgnore]
        public int AnimatedClipsID { set; get; }
        public int pageID { set; get; }
        public string img { get; set; }
        public ICollection<Animated> Video { get; set; }
    }

    public class Animated
    {
        public int ID { get; set; }
        public int animatedVideoID { get; set; }
        [JsonIgnore]
        public int AnimatedClipsID { set; get; }
        public string title { get; set; }
        public string link { get; set; }
        public AnimatedClips AnimatedClips { get; set; }
    }
}
