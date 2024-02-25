import { useTranslation } from "react-i18next";

import Btn from "@form/Btn/Btn";
import SliderAlbums from "./SliderAlbums";

const MainAlbums = () => {
  const { t } = useTranslation();

  return (
    <section className="main-albums">
      <div className="main-albums__container">
        <h2 className="main-albums__title">{t("albums")}</h2>
        <SliderAlbums />
        <Btn className="main-albums__btn" path="/discography#albums">
          {t("see-discography")}
        </Btn>
      </div>
    </section>
  );
};

export default MainAlbums;
