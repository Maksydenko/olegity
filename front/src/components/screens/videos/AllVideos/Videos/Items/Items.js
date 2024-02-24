import Item from "./Item";

const Items = ({ videos, filterText }) => (
  <div className="videos__items">
    {videos.map((video, index) => {
      const { title } = video;

      const titleLowerCased = title.toLowerCase();
      const filterTextLowerCased = filterText.toLowerCase();

      if (!titleLowerCased.includes(filterTextLowerCased)) {
        return null;
      }
      return <Item key={index} video={video} />;
    })}
  </div>
);

export default Items;
