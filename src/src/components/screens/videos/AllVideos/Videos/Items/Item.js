import Img from "@base/Img/Img";
import Iframe from "@base/Video/Iframe";
import Popup from "@base/Popup/Popup";

const Item = ({ video }) => {
  const button = <span className="_icon-youtube"></span>;

  return (
    <div className="videos__item">
      <div className="videos__body">
        <Img className="videos" img={video.img} />
        <Popup className="videos" button={button}>
          <Iframe className="videos" video={video} />
        </Popup>
      </div>
      <h5 className="videos__title">{video.title}</h5>
    </div>
  );
};

export default Item;
