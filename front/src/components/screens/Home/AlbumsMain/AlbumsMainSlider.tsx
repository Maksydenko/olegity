import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import MusicCard from "@/components/shared/MusicCard/MusicCard";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { Breakpoint } from "@/enums/breakpoint.enum";

import { IAlbum } from "@/interfaces/music.interface";

interface AlbumsMainSliderProps {
  albums: IAlbum[];
}

const AlbumsMainSlider: FC<AlbumsMainSliderProps> = ({ albums }) => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const isMobileSmall = useBreakpointCheck(Breakpoint.MobileSmall);

  const slides = albums.map((album) => {
    const { title } = album;

    const slide = {
      id: title,
      slide: <MusicCard className="albums-main__music-card" music={album} />,
    };

    return slide;
  });

  return (
    <SliderSwiper
      className="albums-main__slider-swiper"
      slides={slides}
      breakpoints={{
        [Breakpoint.Mobile]: {
          slidesPerView: 3,
          isBreakpoint: isMobile,
        },
        [Breakpoint.MobileSmall]: {
          slidesPerView: 2,
          isBreakpoint: isMobileSmall,
        },
      }}
    />
  );
};

export default AlbumsMainSlider;
