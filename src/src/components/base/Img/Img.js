import { useLoading } from "@hooks/useLoading";

import Loader from "@common/Loader/Loader";
import { Source } from "./Source";
import { useRef } from "react";

const Img = ({ className, img, style, resetStyle }) => {
  // const isLoading = useLoading("img");
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  return (
    <div
      className={`${className}__img${resetStyle ? "" : " img"}`}
      style={style}
    >
      {isLoading && <Loader />}
      <Source img={img} ref={objectRef} />
    </div>
  );
};

export default Img;
