import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import useVideosStore from "@/stores/useVideos.store";

interface VideosMainSliderProps {}

const VideosMainSlider: FC<VideosMainSliderProps> = () => {
  const { musicVideos } = useVideosStore();
  const latestVideos = musicVideos.slice(0, 5);

  const slides = latestVideos.map(({ id, img, video }) => {
    const { title, link } = video[0];

    const slide = {
      id: id,
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
