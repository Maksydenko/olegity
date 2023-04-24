import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import MusicCard from "@common/MusicCard/MusicCard";

import albums from "@constants/music/albums";

const SliderAlbums = () => {
  const slides = albums.map((album, index) => (
    <MusicCard key={index} className="main-albums" track={album} />
  ));

  return (
    <SliderSwiper
      className="main-albums"
      breakpoints={{
        320: { slidesPerView: "1" },
        479.98: { slidesPerView: "2" },
        767.98: { slidesPerView: "3" },
      }}
    >
      {slides}
    </SliderSwiper>
  );
};

export default SliderAlbums;
