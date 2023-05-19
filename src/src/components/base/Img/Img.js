import { useLoading } from "@hooks/useLoading";

import Loader from "@common/Loader/Loader";
import Source from "./Source";

const Img = ({ className, img, style, defaultStyle = true }) => {
  const isLoading = useLoading("img");

  return (
    <div
      className={`${className}__img${defaultStyle ? " img" : ""}`}
      style={style}
    >
      {isLoading && <Loader />}
      <Source img={img} />
    </div>
  );
};

export default Img;
