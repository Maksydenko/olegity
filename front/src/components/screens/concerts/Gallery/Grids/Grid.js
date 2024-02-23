import Img from "@base/Img/Img";

const Grid = ({ groupImages }) =>
  groupImages.map((img, index) => (
    <Img key={index} className="gallery__img" img={img} />
  ));

export default Grid;
