import { useLoader } from "@hooks/useLoader";

import Loader from "@base/Loader/Loader";
import ImgPicture from "./ImgPicture";

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
