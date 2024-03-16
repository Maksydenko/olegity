"use client";

import { FC, useRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

interface VideoProps extends ReactPlayerProps {
  className?: string;
  loader?: boolean;
}

const Video: FC<VideoProps> = ({ className, url, light, loader = true }) => {
  const videoRef = useRef(null);
  const { isLoading } = useLoadingObject(videoRef);

  const showLoader = loader && isLoading;

  return (
    <span
      style={{ display: "block" }}
      className={clsx(className, "video")}
      ref={videoRef}
    >
      {showLoader && <Loader />}
      <ReactPlayer url={url} width="100%" height="100%" light={light} />
    </span>
  );
};

export default Video;
