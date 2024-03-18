import { FC } from "react";

import Item from "./Item";

import { IMusicPlatforms } from "@/components/shared/ListenOn/musicPlatforms.interface";
import { ILinkWithoutLabel } from "@/interfaces/link.interface";

interface ItemsProps {
  links: IMusicPlatforms;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const Items: FC<ItemsProps> = ({
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const { spotify, appleMusic, youtubeMusic, deezer } = links;
  const items: ILinkWithoutLabel[] = [
    {
      icon: "spotify",
      value: spotify,
    },
    {
      icon: "apple-music",
      value: appleMusic,
    },
    {
      icon: "youtube-music",
      value: youtubeMusic,
    },
    {
      icon: "deezer",
      value: deezer,
    },
  ];

  const itemList = items.map((item, index) => {
    const { icon } = item;

    return (
      <Item
        key={icon}
        item={item}
        {...(swiperParallax && {
          swiperParallax: swiperParallax - index * 100,
        })}
        {...(swiperParallaxDuration && {
          swiperParallaxDuration: swiperParallaxDuration,
        })}
      />
    );
  });

  return <ul className="listen-on__list">{itemList}</ul>;
};

export default Items;
