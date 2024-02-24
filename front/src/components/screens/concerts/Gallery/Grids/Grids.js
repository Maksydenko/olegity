import clsx from "clsx";

import Grid from "./Grid";

const Grids = ({ imgs }) => {
  const { length: imgsLength } = imgs;

  const groupedImgs = [];
  for (let i = 0; i < imgsLength; i += 4) {
    groupedImgs.push(imgs.slice(i, i + 4));
  }

  const grids = groupedImgs.map((groupImgs, index) => {
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
        <Grid key={index} groupImgs={groupImgs} />
      </div>
    );
  });

  return <div className="gallery__grids">{grids}</div>;
};

export default Grids;
