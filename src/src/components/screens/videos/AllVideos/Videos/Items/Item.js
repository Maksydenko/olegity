import Img from "@base/Img/Img";
import Popup from "@base/Popup/Popup";
import Video from "@common/Video/Video";

const Item = ({ video }) => {
  const button = <span className="_icon-youtube"></span>;

  return (
    <div className="videos__item">
      <div className="videos__body">
        <Img className="videos" img={video.img} />
        <Popup className="videos" button={button}>
          <Video className="videos" video={video} />
        </Popup>
      </div>
      <h5 className="videos__title">{video.title}</h5>
    </div>
  );
};

export default Item;
