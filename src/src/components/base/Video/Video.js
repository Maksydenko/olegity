import { useRef } from "react";

import Loader from "@shared/Loader/Loader";
import { Items } from "./Items/Items";

import { useLoading } from "@hooks/useLoading";

import { handleClassName } from "@utils/className.util";

const Video = ({ className, modifier, poster, video, resetStyle }) => {
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
      <Items video={video} poster={poster} ref={objectRef} />
    </div>
  );
};

export default Video;
