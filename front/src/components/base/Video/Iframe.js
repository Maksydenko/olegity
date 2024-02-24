import { useRef } from "react";
import clsx from "clsx";

import Loader from "@shared/Loader/Loader";

import { useLoadingObject } from "@hooks/useLoadingObject";

const Iframe = ({ className, video: { src, title } }, loader) => {
  const iframeRef = useRef(null);
  const { isLoading } = useLoadingObject(iframeRef);

  const isLoader = loader && isLoading;

  return (
    <div className={clsx(className, "iframe")}>
      {isLoader && <Loader />}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={iframeRef}
      />
    </div>
  );
};

export default Iframe;
