// import { useTranslation } from "next-i18next";

import Btn from "@/components/form/Btn/Btn";
import SliderAlbums from "./SliderAlbums";

const MainAlbums = () => {
  // const { t } = useTranslation();

  return (
    <section className="albums-main">
      <div className="albums-main__container">
        <h2 className="albums-main__title">{"albums"}</h2>
        <SliderAlbums />
        <Btn className="albums-main__btn" path="/discography#albums">
          {"see-discography"}
        </Btn>
      </div>
    </section>
  );
};

export default MainAlbums;
