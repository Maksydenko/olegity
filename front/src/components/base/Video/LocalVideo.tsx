import { FC } from "react";
import clsx from "clsx";

import Sources from "./Sources/Sources";

import { TypeLocalVideo } from "./localVideo.type";

interface LocalVideoProps {
  className?: string;
  poster?: string;
  src: TypeLocalVideo;
  resetStyle?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
}

const LocalVideo: FC<LocalVideoProps> = ({
  className,
  poster,
  src,
  autoPlay = true,
  muted = true,
  controls,
  loop = true,
  preload,
}) => {
  const videoAttrs = {
    poster,
    autoPlay,
    muted,
    controls,
    loop,
    preload,
  };

  return (
    <div className={clsx(className, "video")}>
      <video {...videoAttrs}>
        <Sources src={src} />
        <track kind="captions" />
      </video>
    </div>
  );
};

export default LocalVideo;
