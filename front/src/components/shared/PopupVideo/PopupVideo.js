import Img from "@base/Img/Img";
import Popup from "@base/Popup/Popup";
import Iframe from "@base/Video/Iframe";

const PopupVideo = ({ className, video }) => {
  const { img } = video;
  const button = <span className="_icon-youtube"></span>;

  return (
    <div className={`${className}__popup-video popup-video`}>
      <Img className="popup-video__img" img={img} />
      <Popup className="popup-video" button={button}>
        <Iframe className="popup-video" video={video} />
      </Popup>
    </div>
  );
};

export default PopupVideo;
