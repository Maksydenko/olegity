import { useLoading } from "@hooks/useLoading";

import { useRef } from "react";

import Loader from "@shared/Loader/Loader";
import { Source } from "./Source";

const Img = ({ className, img, style, resetStyle }) => {
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
