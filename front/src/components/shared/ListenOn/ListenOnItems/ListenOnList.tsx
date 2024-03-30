import { FC } from "react";

import ListenOnItem from "./ListenOnItem";

import { IMusicPlatforms } from "@/interfaces/music.interface";
import { ILinkWithoutLabel } from "@/interfaces/link.interface";

interface ListenOnListProps {
  links: IMusicPlatforms;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const ListenOnList: FC<ListenOnListProps> = ({
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const { spotify, appleMusic, youtubeMusic, deezer } = links;

  const musicPlatforms: ILinkWithoutLabel[] = [
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

  const musicPlatformItems = musicPlatforms.map((musicPlatform, index) => {
    const { icon } = musicPlatform;

    return (
      <ListenOnItem
        key={icon}
        musicPlatform={musicPlatform}
        {...(swiperParallax && {
          swiperParallax: swiperParallax - index * 100,
        })}
        {...(swiperParallaxDuration && {
          swiperParallaxDuration: swiperParallaxDuration,
        })}
      />
    );
  });

  return <ul className="listen-on__list">{musicPlatformItems}</ul>;
};

export default ListenOnList;
