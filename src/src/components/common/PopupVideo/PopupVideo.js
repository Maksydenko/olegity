import Img from "@base/Img/Img";
import Popup from "@base/Popup/Popup";
import Video from "@common/Video/Video";

function PopupVideo(props) {
  const button = <span className="_icon-youtube"></span>;
  const { className, video } = props;

  return (
    <div className={`${className}__popup-video popup-video`}>
      <Img className="popup-video" img={video.img} />
      <Popup className="popup-video" button={button}>
        <Video className="popup-video" video={video} />
      </Popup>
    </div>
  );
}

export default PopupVideo;
