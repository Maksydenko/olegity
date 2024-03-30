import { FC } from "react";

import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IVideo } from "@/interfaces/video.interface";

interface VideoItemProps {
  video: IVideo;
}

const VideoItem: FC<VideoItemProps> = ({ video: { title, url, img } }) => {
  return (
    <div className="video__item">
      <PopupVideo className="video__popup-video" img={img} video={url} />
      <h4 className="video__title">{title}</h4>
    </div>
  );
};

export default VideoItem;
