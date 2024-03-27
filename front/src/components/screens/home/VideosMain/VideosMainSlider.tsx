import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IVideo } from "@/interfaces/video.interface";

interface VideosMainSliderProps {
  video: IVideo[];
}

const VideosMainSlider: FC<VideosMainSliderProps> = ({ video }) => {
  const latestVideos = video.slice(0, 5);

  const slides = latestVideos.map(({ title, url, img }) => {
    const slide = {
      id: title,
      slide: (
        <PopupVideo
          className="main-videos__popup-video"
          img={img}
          video={url}
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
