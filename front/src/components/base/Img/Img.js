import { useRef } from "react";
import clsx from "clsx";

import Loader from "@shared/Loader/Loader";
import { Sources } from "./Sources";

import { useLoadingObject } from "@hooks/useLoadingObject";

const Img = ({ className, href, img, svg, loader, style }) => {
  const objectRef = useRef(null);
  const { isLoading } = useLoadingObject(objectRef);

  const Tag = href ? "a" : "div";

  return (
    <Tag
      className={clsx(className, "img", svg && "img_svg")}
      style={style}
      {...(href && {
        href,
      })}
    >
      {loader && isLoading && <Loader />}
      <Sources img={img} ref={objectRef} />
    </Tag>
  );
};

export default Img;
