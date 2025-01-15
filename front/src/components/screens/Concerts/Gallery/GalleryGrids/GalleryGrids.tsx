import { FC } from "react";
import clsx from "clsx";

import GalleryGrid from "./GalleryGrid";

import { IConcert } from "@/interfaces/concert.interface";

interface GalleryGridsProps {
  concerts: IConcert[];
}

const GalleryGrids: FC<GalleryGridsProps> = ({ concerts }) => {
  const { length: concertsLength } = concerts;

  const imgGroups = [];
  for (let i = 0; i < concertsLength; i += 4) {
    imgGroups.push(concerts.slice(i, i + 4));
  }

  const imgGrids = imgGroups.map((imgGroup, index) => {
    const [img] = imgGroup;
    const { id } = img;

    return (
      <div
        key={id}
        className={clsx(
          "gallery__grid",
          index % 3 === 0
            ? "gallery__grid_tall-start"
            : index % 3 === 1
            ? ""
            : "gallery__grid_tall-end"
        )}
      >
        <GalleryGrid imgGroup={imgGroup} />
      </div>
    );
  });

  return <div className="gallery__grids">{imgGrids}</div>;
};

export default GalleryGrids;
