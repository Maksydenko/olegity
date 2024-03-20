import { FC } from "react";

import MusicCard from "@/components/shared/MusicCard/MusicCard";
import ListenOn from "@/components/shared/ListenOn/ListenOn";

import { ISingle } from "@/interfaces/music.interface";

interface ItemProps {
  single: ISingle;
}

const Item: FC<ItemProps> = ({ single }) => {
  const { links } = single;

  return (
    <div className="singles__item">
      <MusicCard className="singles__music-card" track={single} />
      <ListenOn className="singles" links={links} />
    </div>
  );
};

export default Item;
