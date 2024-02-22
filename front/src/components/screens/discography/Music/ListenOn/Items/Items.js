import Item from "./Item";

const Items = ({ links, swiperParallax, swiperParallaxDuration }) => {
  const items = [
    { link: links.spotify, icon: "spotify" },
    { link: links.appleMusic, icon: "apple-music" },
    { link: links.youtubeMusic, icon: "youtube-music" },
    { link: links.deezer, icon: "deezer" },
  ];

  return items.map((item, index) => (
    <Item
      key={index}
      item={item}
      swiperParallax={swiperParallax - index * 100}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  ));
};

export default Items;
