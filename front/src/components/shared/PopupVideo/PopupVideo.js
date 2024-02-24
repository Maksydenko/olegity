import clsx from "clsx";

import Img from "@base/Img/Img";
import Popup from "@base/Popup/Popup";
import Iframe from "@base/Video/Iframe";

const PopupVideo = ({ className, img, video, title = true }) => {
  const { title: videoTitle } = video;

  const button = <span className="_icon-youtube"></span>;

  return (
    <div className={clsx(className, "popup-video")}>
      {title && <h4 className="popup-video__title">{videoTitle}</h4>}
      <Img className="popup-video__img" img={img} />
      <Popup className="popup-video__popup" button={button}>
        <Iframe className="popup-video__video" video={video} />
      </Popup>
    </div>
  );
};

export default PopupVideo;
