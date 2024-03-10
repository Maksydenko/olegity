"use client";

import { FC, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { useLoadingObject } from "@/hooks/useLoadingObject";

interface VideoProps {
  className?: string;
  url: string;
  img?: string;
  loader?: boolean;
}

const Video: FC<VideoProps> = ({ className, url, img, loader = true }) => {
  const videoRef = useRef(null);
  const { isLoading } = useLoadingObject(videoRef);

  const isLoader = loader && isLoading;

  return (
    <span
      style={{ display: "block" }}
      className={clsx(className, "video")}
      ref={videoRef}
    >
      {isLoader && <Loader />}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        {...(img && {
          light: img,
        })}
      />
    </span>
  );
};

export default Video;
