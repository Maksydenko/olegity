import { FC } from "react";

import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IVideo } from "@/interfaces/video.interface";

interface VideosItemProps {
  video: IVideo;
}

const VideosItem: FC<VideosItemProps> = ({ video: { title, url, img } }) => {
  return (
    <div className="videos__item">
      <PopupVideo className="videos__popup-video" img={img} video={url} />
      <h4 className="videos__title">{title}</h4>
    </div>
  );
};

export default VideosItem;
