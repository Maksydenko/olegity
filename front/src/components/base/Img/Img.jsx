import { useRef } from "react";
import clsx from "clsx";

import Loader from "@shared/Loader/Loader";
import { Sources } from "./Sources";

import { useLoadingObject } from "@hooks/useLoadingObject";

const Img = ({
  className,
  href,
  img,
  svg,
  loading = "lazy",
  loader,
  style,
}) => {
  const imgRef = useRef(null);
  const { isLoading } = useLoadingObject(imgRef);

  const isLoader = loader && isLoading;
  const Tag = href ? "a" : "div";

  return (
    <Tag
      className={clsx(className, "img", svg && "img_svg")}
      style={style}
      {...(href && {
        href,
      })}
    >
      {isLoader && <Loader />}
      <Sources img={img} loading={loading} ref={imgRef} />
    </Tag>
  );
};

export default Img;
