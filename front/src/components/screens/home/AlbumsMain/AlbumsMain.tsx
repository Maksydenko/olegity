import { FC } from "react";
// import { useTranslation } from "next-i18next";

import Btn from "@/components/form/Btn/Btn";
import AlbumsMainSlider from "./AlbumsMainSlider";

interface AlbumsMainProps {}

const AlbumsMain: FC<AlbumsMainProps> = () => {
  // const { t } = useTranslation();

  return (
    <section className="albums-main">
      <div className="albums-main__container">
        <h2 className="albums-main__title">{"albums"}</h2>
        <AlbumsMainSlider />
        <Btn className="albums-main__btn" path="/discography#albums">
          {"see-discography"}
        </Btn>
      </div>
    </section>
  );
};

export default AlbumsMain;
