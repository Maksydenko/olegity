import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import PopupVideo from "@shared/PopupVideo/PopupVideo";

import { musicVideos } from "@constants/videos/musicVideos.const";

const SliderMedias = () => {
  const latestMusicVideos = musicVideos.slice(0, 5);
  const slides = latestMusicVideos.map((video) => {
    const { src } = video;

    return <PopupVideo key={src} className="main-videos" video={video} />;
  });

  return (
    <SliderSwiper className="main-videos" pagination virtual>
      {slides}
    </SliderSwiper>
  );
};

export default SliderMedias;
