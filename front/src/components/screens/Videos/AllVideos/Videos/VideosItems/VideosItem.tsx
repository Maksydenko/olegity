import { FC } from "react";

import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosItemProps {
  video: IMusicVideo;
}

const VideosItem: FC<VideosItemProps> = ({ video: { link, title, img } }) => {
  return (
    <div className="videos__item">
      <PopupVideo className="videos__popup-video" img={img} video={link} />
      <h4 className="videos__title">{title}</h4>
    </div>
  );
};

export default VideosItem;
