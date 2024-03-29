import Item from "./Item";

const Items = ({ links, swiperParallax, swiperParallaxDuration }) => {
  const { spotify, appleMusic, youtubeMusic, deezer } = links;
  const items = [
    {
      link: spotify,
      icon: "spotify",
    },
    {
      link: appleMusic,
      icon: "apple-music",
    },
    {
      link: youtubeMusic,
      icon: "youtube-music",
    },
    {
      link: deezer,
      icon: "deezer",
    },
  ];

  const itemList = items.map((item, index) => (
    <Item
      key={index}
      item={item}
      swiperParallax={swiperParallax - index * 100}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  ));
  return <ul className="listen-on__list">{itemList}</ul>;
};

export default Items;
