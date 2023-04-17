import { useTranslation } from "react-i18next";

import MainLink from "@common/MainLink/MainLink";
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
        <MainLink className="main-albums" link={link} />
      </div>
    </section>
  );
}

export default MainAlbums;
