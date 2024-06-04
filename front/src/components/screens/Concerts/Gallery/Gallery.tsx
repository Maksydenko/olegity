import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import GalleryGrids from "./GalleryGrids/GalleryGrids";

interface GalleryProps {
  className?: string;
}

const Gallery: FC<GalleryProps> = (className) => {
  const { t } = useTranslation("common");

  return (
    <section className={clsx(className, "gallery")}>
      <div className="gallery__container">
        <h2 className="gallery__title">{t("gallery")}</h2>
      </div>
      <GalleryGrids />
    </section>
  );
};

export default Gallery;
