import { useLoading } from "@hooks/useLoading";

import Loader from "@common/Loader/Loader";
import Source from "./Source";

const Img = ({ className, img, styles = true }) => {
  const isLoading = useLoading("img");

  return (
    <div className={`${className}__img${styles ? " img" : ""}`}>
      {isLoading && <Loader />}
      <Source img={img} />
    </div>
  );
};

export default Img;
