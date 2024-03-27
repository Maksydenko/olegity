import { FC } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Btn from "@/components/form/Btn/Btn";
import AlbumsMainSlider from "./AlbumsMainSlider";

interface AlbumsMainProps {
  className?: string;
}

const AlbumsMain: FC<AlbumsMainProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <section className={clsx(className, "albums-main")}>
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
