import { useLoader } from "@hooks/useLoader";

import Loader from "@base/Loader/Loader";
import ImgPicture from "./ImgPicture";

const Img = ({ className, img }) => {
  const loading = useLoader("img");

  return (
    <div className={`${className}__img`}>
      {loading && <Loader />}
      <ImgPicture img={img} />
    </div>
  );
};

export default Img;
