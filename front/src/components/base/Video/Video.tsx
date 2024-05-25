import { FC, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

interface VideoProps extends ReactPlayerProps {
  className?: string;
  loader?: boolean;
}

const Video: FC<VideoProps> = ({ className, url, light, loader = true }) => {
  const [showLoader, setShowLoader] = useState(true);

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
        controls
        onReady={handleReady}
      />
    </div>
  );
};

export default Video;
