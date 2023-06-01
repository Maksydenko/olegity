import { useRef } from "react";

import Loader from "@shared/Loader/Loader";
import { Items } from "./Items/Items";

import { useLoading } from "@hooks/useLoading";

const Video = ({ className, poster, video, resetStyle }) => {
  const objectRef = useRef(null);
  const isLoading = useLoading(objectRef);

  return (
    <div className={`${className}__video${resetStyle ? "" : " video"}`}>
      {isLoading && <Loader />}
      <Items video={video} poster={poster} ref={objectRef} />
    </div>
  );
};

export default Video;
