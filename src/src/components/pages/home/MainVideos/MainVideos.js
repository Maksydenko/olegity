import { useTranslation } from "react-i18next";

import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import MainBlock from "@common/MainBlock/MainBlock";
import Video from "@common/Video/Video";

import musicVideos from "@components/common/consts/videos/musicVideos";

function MainVideos() {
  const { t } = useTranslation();

  const link = {
    path: "/videos",
    value: "see-videos",
  };

  const slides = musicVideos
    .slice(0, 5)
    .map((video, index) => (
      <Video key={index} className="main-videos" video={video} />
    ));

  return (
    <section className="main-videos">
      <h2 className="main-videos__title">{t("latest-videos")}</h2>
      <SliderSwiper
        className="main-videos"
        paginationType="progressbar"
        virtual
      >
        {slides}
      </SliderSwiper>
      <MainBlock className="main-videos" link={link} />
    </section>
  );
}

export default MainVideos;
