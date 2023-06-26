import Sources from "./Sources";

import { handleClassName } from "@utils/className.util";

const Video = ({
  className,
  modifier,
  poster,
  video,
  resetStyle,
  autoPlay = true,
  muted = true,
  controls,
  loop = true,
  preload,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__video`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " video";

  const videoAttrs = {
    poster,
    autoPlay,
    muted,
    controls,
    loop,
    preload,
  };

  return (
    <div className={modifiedClassName + defaultClassName}>
      <video {...videoAttrs}>
        <Sources video={video} />
      </video>
    </div>
  );
};

export default Video;
