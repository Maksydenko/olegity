namespace olegity.Data.Models
{

    public class AboutSections
    {
        public int ID { set; get; }
        public int pageID { set; get; }
        public string img { get; set; }
        public ICollection<VideoAbout> Video { get; set; }
        public ICollection<TranslationsAbout> Translations { get; set; }
    }
    public class TranslationsAbout
    {
        public int ID { get; set; }
        public string translation { get; set; }
        public string title { get; set; }
        public string text { get; set; }
        public int sectionID { get; set; }
        public AboutSections AboutSections { get; set; }
    }
    public class VideoAbout
    {
        public int ID { get; set; }
        public int sectionID { get; set; }
        public string title { get; set; }
        public string link { get; set; }
        public AboutSections AboutSections { get; set; }
    }
}
