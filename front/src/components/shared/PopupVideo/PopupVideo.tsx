import { FC } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import Popup from "@/components/base/Popup/Popup";
import Video from "@/components/base/Video/Video";

import { IImg } from "@/interfaces/img.interface";

interface PopupVideoProps {
  className?: string;
  img: IImg;
  video: string;
  title?: string;
}

const PopupVideo: FC<PopupVideoProps> = ({ className, img, video, title }) => {
  const button = <span className="_icon-youtube"></span>;

  return (
    <div className={clsx(className, "popup-video")}>
      {title && <h4 className="popup-video__title">{title}</h4>}
      <Img className="popup-video__img" img={img} />
      <Popup className="popup-video__popup" button={button}>
        <Video className="popup-video__video" url={video} />
      </Popup>
    </div>
  );
};

export default PopupVideo;
