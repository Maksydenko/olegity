import { FC } from "react";
import clsx from "clsx";

import Grid from "./Grid";

import { IImg } from "@/components/base/Img/img.interface";

interface GridsProps {
  imgs: IImg[];
}

const Grids: FC<GridsProps> = ({ imgs }) => {
  const { length: imgsLength } = imgs;

  const imgGroups = [];
  for (let i = 0; i < imgsLength; i += 4) {
    imgGroups.push(imgs.slice(i, i + 4));
  }

  const grids = imgGroups.map((imgGroup, index) => {
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
        <Grid key={index} groupImgs={imgGroup} />
      </div>
    );
  });

  return <div className="gallery__grids">{grids}</div>;
};

export default Grids;
