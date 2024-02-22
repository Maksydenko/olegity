import { useTranslation } from "react-i18next";

import Grids from "./Grids/Grids";

import images from "./images";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">{t("gallery")}</h2>
      </div>
      <Grids images={images} />
    </section>
  );
};

export default Gallery;
