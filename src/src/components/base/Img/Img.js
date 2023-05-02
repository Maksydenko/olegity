import { useLoader } from "@hooks/useLoader";

import Loader from "@base/Loader/Loader";
import ImgPicture from "./ImgPicture";

const Img = ({ className, img, styles = true }) => {
  const loading = useLoader("img");

  return (
    <div className={`${className}__img${styles ? " img" : ""}`}>
      {loading && <Loader />}
      <ImgPicture img={img} />
    </div>
  );
};

export default Img;
