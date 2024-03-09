// import { useTranslation } from "next-i18next";

import Grids from "./Grids/Grids";

import { imgs } from "./imgs.const";

const Gallery = () => {
  // const { t } = useTranslation();

  return (
    <section className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">{"gallery"}</h2>
      </div>
      <Grids imgs={imgs} />
    </section>
  );
};

export default Gallery;
