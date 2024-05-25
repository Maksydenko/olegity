import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import clsx from "clsx";

import Loader from "@shared/Loader/Loader";

const Video = ({ className, url, light, loader = true }) => {
  const [showLoader, setShowLoader] = useState(loader);

  const handleReady = () => {
    setShowLoader(false);
  };

  return (
    <div className={clsx(className, "video")}>
      {showLoader && <Loader />}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        light={light}
        {...(loader && {
          onReady: handleReady,
        })}
      />
    </div>
  );
};

export default Video;
