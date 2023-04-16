import Img from "@base/Img/Img";

function Grid(props) {
  const { groupImages } = props;

  return groupImages.map((img, index) => (
    <Img key={index} className="gallery" img={img} />
  ));
}

export default Grid;
