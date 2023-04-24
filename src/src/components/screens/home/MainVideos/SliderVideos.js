import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import Video from "@common/Video/Video";

import musicVideos from "@constants/videos/musicVideos";

const SliderVideos = () => {
  const slides = musicVideos
    .slice(0, 5)
    .map((video, index) => (
      <Video key={index} className="main-videos" video={video} />
    ));

  return (
    <SliderSwiper className="main-videos" pagination virtual>
      {slides}
    </SliderSwiper>
  );
};

export default SliderVideos;
