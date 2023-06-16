import { useRef } from "react";

import Loader from "@shared/Loader/Loader";

import { useLoading } from "@hooks/useLoading";

import { handleClassName } from "@utils/className.util";

const Iframe = ({ className, modifier, video: { src, title }, resetStyle }) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__video`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " video";

  return (
    <div className={modifiedClassName + defaultClassName}>
      {isLoading && <Loader />}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={objectRef}
      ></iframe>
    </div>
  );
};

export default Iframe;
