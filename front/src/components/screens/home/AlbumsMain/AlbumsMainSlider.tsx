"use client";

import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import MusicCard from "@/components/shared/MusicCard/MusicCard";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { Breakpoint } from "@/enums/breakpoint.enum";

import { albums } from "@/data/music/albums.data";

interface AlbumsMainSliderProps {}

const AlbumsMainSlider: FC<AlbumsMainSliderProps> = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const isMobileSmall = useBreakpointCheck(Breakpoint.MobileSmall);

  const slides = albums.map((album) => {
    const { title } = album;

    const slide = {
      id: title,
      slide: <MusicCard className="albums-main__music-card" track={album} />,
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
