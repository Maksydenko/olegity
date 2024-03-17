import { FC } from "react";

import Item from "./Item";

interface ItemsProps {
  links: {
    spotify: string;
    appleMusic: string;
    youtubeMusic: string;
    deezer: string;
  };
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const Items: FC<ItemsProps> = ({
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const { spotify, appleMusic, youtubeMusic, deezer } = links;
  const items = [
    {
      icon: "spotify",
      link: spotify,
    },
    {
      icon: "apple-music",
      link: appleMusic,
    },
    {
      icon: "youtube-music",
      link: youtubeMusic,
    },
    {
      icon: "deezer",
      link: deezer,
    },
  ];

  const itemList = items.map((item, index) => (
    <Item
      key={index}
      item={item}
      {...(swiperParallax && {
        swiperParallax: swiperParallax - index * 100,
      })}
      {...(swiperParallaxDuration && {
        swiperParallaxDuration: swiperParallaxDuration,
      })}
    />
  ));
  return <ul className="listen-on__list">{itemList}</ul>;
};

export default Items;
