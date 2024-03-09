import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import MusicCard from "@shared/MusicCard/MusicCard";

import { useBreakpointCheck } from "@hooks/useBreakpointCheck";

import { breakpoints } from "@constants/breakpoints.const";
import { albums } from "@constants/music/albums.const";

const SliderAlbums = () => {
  const isMobile = useBreakpointCheck(breakpoints.mobile);
  const isMobileSmall = useBreakpointCheck(breakpoints.mobileSmall);

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
      className="albums-main__slider-swiper"
      breakpoints={{
        [breakpoints.mobile]: {
          slidesPerView: 3,
          isBreakpoint: isMobile,
        },
        [breakpoints.mobileSmall]: {
          slidesPerView: 2,
          isBreakpoint: isMobileSmall,
        },
      }}
    >
      {slides}
    </SliderSwiper>
  );
};

export default SliderAlbums;
