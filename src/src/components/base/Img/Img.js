import useLoader from "@hooks/useLoader";

import ImgPicture from "./ImgPicture";
import Loader from "@base/Loader/Loader";

function Img(props) {
  const { className, img } = props;
  const loading = useLoader("img");

  return (
    <div className={`${className}__img`}>
      {loading && <Loader />}
      <ImgPicture img={img} />
    </div>
  );
}

export default Img;
