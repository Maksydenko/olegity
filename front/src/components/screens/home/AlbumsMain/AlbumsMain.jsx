import { useTranslation } from "react-i18next";

import Btn from "@form/Btn/Btn";
import SliderAlbums from "./SliderAlbums";

const MainAlbums = () => {
  const { t } = useTranslation();

  return (
    <section className="albums-main">
      <div className="albums-main__container">
        <h2 className="albums-main__title">{t("albums")}</h2>
        <SliderAlbums />
        <Btn className="albums-main__btn" path="/discography#albums">
          {t("see-discography")}
        </Btn>
      </div>
    </section>
  );
};

export default MainAlbums;
