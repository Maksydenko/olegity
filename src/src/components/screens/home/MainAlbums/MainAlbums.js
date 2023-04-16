import { useTranslation } from "react-i18next";

import MainBlock from "@common/MainBlock/MainBlock";
import SliderAlbums from "./SliderAlbums";

function MainAlbums() {
  const { t } = useTranslation();

  const link = {
    path: "/discography",
    value: "see-discography",
  };

  return (
    <section className="main-albums">
      <div className="main-albums__container">
        <h2 className="main-albums__title">{t("albums")}</h2>
        <SliderAlbums />
        <MainBlock className="main-albums" link={link} />
      </div>
    </section>
  );
}

export default MainAlbums;
