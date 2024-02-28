import clsx from "clsx";

import Img from "@base/Img/Img";
import Popup from "@base/Popup/Popup";
import Video from "@base/Video/Video";

const PopupVideo = ({ className, img, video, title = true }) => {
  const { title: videoTitle, url } = video;
  const button = <span className="_icon-youtube"></span>;

  return (
    <div className={clsx(className, "popup-video")}>
      {title && <h4 className="popup-video__title">{videoTitle}</h4>}
      <Img className="popup-video__img" img={img} />
      <Popup className="popup-video__popup" button={button}>
        <Video className="popup-video__video" url={url} />
      </Popup>
    </div>
  );
};

export default PopupVideo;
