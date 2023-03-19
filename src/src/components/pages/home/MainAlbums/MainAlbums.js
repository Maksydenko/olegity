import { useTranslation } from "react-i18next";

import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import MusicCard from "@common/MusicCard/MusicCard";
import MainBlock from "@common/MainBlock/MainBlock";

import albums from "@common/consts/music/albums";

function MainAlbums() {
  const { t } = useTranslation();

  const link = {
    path: "/discography",
    value: "see-discography",
  };

  const slides = albums.map((album, index) => (
    <MusicCard key={index} className="main-albums" track={album} />
  ));

  return (
    <section className="main-albums">
      <div className="main-albums__container">
        <h2 className="main-albums__title">{t("albums")}</h2>
        <SliderSwiper
          className="main-albums"
          breakpoints={{
            320: { slidesPerView: "1" },
            479.98: { slidesPerView: "2" },
            767.98: { slidesPerView: "3" },
          }}
        >
          {slides}
        </SliderSwiper>
        <MainBlock className="main-albums" link={link} />
      </div>
    </section>
  );
}

export default MainAlbums;
