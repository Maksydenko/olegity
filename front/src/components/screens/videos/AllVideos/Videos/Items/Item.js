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
      <h5 className="videos__title">{title}</h5>
    </div>
  );
};

export default Item;
