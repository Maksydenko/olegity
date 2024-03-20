import { FC } from "react";

import Item from "./Item";

import { ISingle } from "@/interfaces/music.interface";

interface ItemsProps {
  singles: ISingle[];
}

const Items: FC<ItemsProps> = ({ singles }) => {
  const singleItems = singles.map((single, index) => {
    return <Item key={index} single={single} />;
  });

  return <div className="singles__items">{singleItems}</div>;
};

export default Items;
