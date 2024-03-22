import { FC } from "react";
// import { useTranslation } from "next-i18next";

import GalleryGrids from "./GalleryGrids/GalleryGrids";

import { galleryImgs } from "./galleryImgs.data";

interface GalleryProps {}

const Gallery: FC<GalleryProps> = () => {
  // const { t } = useTranslation();

  return (
    <section className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">{"gallery"}</h2>
      </div>
      <GalleryGrids imgs={galleryImgs} />
    </section>
  );
};

export default Gallery;
