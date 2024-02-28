import PopupVideo from "@shared/PopupVideo/PopupVideo";

const Item = ({ video }) => {
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
