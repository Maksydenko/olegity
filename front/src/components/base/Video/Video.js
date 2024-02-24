import clsx from 'clsx';

import Sources from "./Sources";

const Video = ({
  className,
  poster,
  video,
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
        <Sources video={video} />
      </video>
    </div>
  );
};

export default Video;
