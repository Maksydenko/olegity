import Item from "./Item";

const Items = ({ videos, filterText }) => (
  <div className="videos__items">
    {videos.map(
      (video, index) =>
        video.title.toLowerCase().includes(filterText.toLowerCase()) && (
          <Item key={index} video={video} />
        )
    )}
  </div>
);

export default Items;
