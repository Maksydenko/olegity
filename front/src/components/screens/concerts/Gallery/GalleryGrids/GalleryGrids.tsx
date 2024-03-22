import { FC } from "react";
import clsx from "clsx";

import GalleryGrid from "./GalleryGrid";

import { IImg } from "@/interfaces/img.interface";

interface GalleryGridsProps {
  imgs: IImg[];
}

const GalleryGrids: FC<GalleryGridsProps> = ({ imgs }) => {
  const { length: imgsLength } = imgs;

  const imgGroups = [];
  for (let i = 0; i < imgsLength; i += 4) {
    imgGroups.push(imgs.slice(i, i + 4));
  }

  const imgGrids = imgGroups.map((imgGroup, index) => {
    return (
      <div
        key={index}
        className={clsx(
          "gallery__grid",
          index % 3 === 0
            ? "gallery__grid_tall-start"
            : index % 3 === 1
            ? ""
            : "gallery__grid_tall-end"
        )}
      >
        <GalleryGrid key={index} groupImgs={imgGroup} />
      </div>
    );
  });

  return <div className="gallery__grids">{imgGrids}</div>;
};

export default GalleryGrids;
