import { useLoading } from "@hooks/useLoading";

import Loader from "@base/Loader/Loader";
import Source from "./Source";

const Video = ({ className, poster, video, styles = true }) => {
  const isLoading = useLoading("video");

  return (
    <div className={`${className}__video${styles ? " video" : ""}`}>
      {isLoading && <Loader />}
      <Source video={video} poster={poster} />
    </div>
  );
};

export default Video;
