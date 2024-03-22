import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { musicVideos } from "@/data/videos/musicVideos.data";

interface VideosMainSliderProps {}

const VideosMainSlider: FC<VideosMainSliderProps> = () => {
  const latestMusicVideos = musicVideos.slice(0, 5);

  const slides = latestMusicVideos.map((video) => {
    const { title, img } = video;

    return (
      <PopupVideo
        key={title}
        className="main-videos__popup-video"
        img={img}
        video={video}
      />
    );
  });

  return (
    <SliderSwiper
      className="main-videos__slider-swiper"
      paginationType="progressbar"
      virtual
      spaceBetween={0}
    >
      {slides}
    </SliderSwiper>
  );
};

export default VideosMainSlider;
