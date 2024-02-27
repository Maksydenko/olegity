import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import MusicCard from "@shared/MusicCard/MusicCard";

import { breakpoints } from "@constants/breakpoints.const";
import { albums } from "@constants/music/albums.const";

const SliderAlbums = () => {
  const slides = albums.map((album) => {
    const { title } = album;

    return (
      <MusicCard
        key={title}
        className="albums-main__music-card"
        track={album}
      />
    );
  });

  return (
    <SliderSwiper
      className="albums-main__swiper"
      breakpoints={{
        [breakpoints.mobile]: {
          slidesPerView: 3,
        },
        [breakpoints.mobileSmall]: {
          slidesPerView: 2,
        },
      }}
    >
      {slides}
    </SliderSwiper>
  );
};

export default SliderAlbums;
