import { useRef } from "react";

import Loader from "@shared/Loader/Loader";

import { useLoading } from "@hooks/useLoading";

const Iframe = ({ className, video, resetStyle = true }) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  return (
    <div className={`${className}__video${resetStyle ? " video" : ""}`}>
      {isLoading && <Loader />}
      <iframe
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={objectRef}
      ></iframe>
    </div>
  );
};

export default Iframe;
