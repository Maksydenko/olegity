import { FC } from "react";

import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { IVideo } from "@/interfaces/video.interface";

interface ItemProps {
  video: IVideo;
}

const Item: FC<ItemProps> = ({ video }) => {
  const { title, img } = video;

  return (
    <div className="videos__item">
      <PopupVideo
        className="videos__popup-video"
        img={img}
        video={video}
        title={false}
      />
      <h4 className="videos__title">{title}</h4>
    </div>
  );
};

export default Item;
