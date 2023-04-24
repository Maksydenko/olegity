import Grid from "./Grid";

const Grids = ({ images }) => {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }

  const grids = groupedImages.map((groupImages, index) => (
    <div
      key={index}
      className={`gallery__grid${
        index % 3 === 0
          ? " gallery__grid_tall-start"
          : index % 3 === 1
          ? ""
          : " gallery__grid_tall-end"
      }`}
    >
      <Grid key={index} groupImages={groupImages} />
    </div>
  ));

  return <div className="gallery__grids">{grids}</div>;
};

export default Grids;
