import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosMainSliderProps {
  musicVideos: IMusicVideo[];
}

const VideosMainSlider: FC<VideosMainSliderProps> = ({ musicVideos }) => {
  const latestVideos = musicVideos.slice(0, 5);

  const slides = latestVideos.map(({ ID, link, title, img }) => {
    const slide = {
      id: ID,
      slide: (
        <PopupVideo
          className="main-videos__popup-video"
          img={img}
          video={link}
          title={title}
        />
      ),
    };

    return slide;
  });

  return (
    <SliderSwiper
      className="main-videos__slider-swiper"
      slides={slides}
      paginationType="progressbar"
      virtual
      spaceBetween={0}
    ></SliderSwiper>
  );
};

export default VideosMainSlider;
