import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import Iframe from "@base/Video/Iframe";

import { musicVideos } from "@constants/videos/musicVideos";

const SliderMedias = () => {
  const slides = musicVideos
    .slice(0, 5)
    .map((video, index) => (
      <Iframe key={index} className="main-videos" video={video} />
    ));

  return (
    <SliderSwiper className="main-videos" pagination virtual>
      {slides}
    </SliderSwiper>
  );
};

export default SliderMedias;
