import ReactPlayer from "react-player/lazy";
import clsx from "clsx";

const ReactVideo = ({ className, url, img }) => {
  return (
    <div className={clsx(className, "video")}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        {...(img && {
          light: img,
        })}
      />
    </div>
  );
};

export default ReactVideo;
