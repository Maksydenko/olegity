import { FC } from "react";

import ListenOn from "@/components/shared/ListenOn/ListenOn";
import MusicCard from "@/components/shared/MusicCard/MusicCard";

import { IMusicPlatforms, ISingle } from "@/interfaces/music.interface";

interface SinglesItemProps {
  single: ISingle;
}

const SinglesItem: FC<SinglesItemProps> = ({ single }) => {
  const { spotify, appleMusic, youtubeMusic, deezer } = single;

  const links: IMusicPlatforms = {
    spotify,
    appleMusic,
    youtubeMusic,
    deezer,
  };

  return (
    <div className="singles__item">
      <MusicCard className="singles__music-card" music={single} />
      <ListenOn className="singles" links={links} />
    </div>
  );
};

export default SinglesItem;
