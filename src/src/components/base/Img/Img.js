import { useLoading } from "@hooks/useLoading";

import { useRef } from "react";

import Loader from "@shared/Loader/Loader";
import { Sources } from "./Sources";

import { handleClassName } from "@utils/className.util";

const Img = ({ className, modifier, img, style, resetStyle }) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__img`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " img";

  return (
    <div className={modifiedClassName + defaultClassName} style={style}>
      {isLoading && <Loader />}
      <Sources img={img} ref={objectRef} />
    </div>
  );
};

export default Img;
