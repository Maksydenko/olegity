import { FC } from "react";

import SinglesItem from "./SinglesItem";

import { ISingle } from "@/interfaces/music.interface";

interface SinglesProps {
  singles: ISingle[];
}

const SinglesList: FC<SinglesProps> = ({ singles }) => {
  const singleItems = singles.map((single, index) => {
    return <SinglesItem key={index} single={single} />;
  });

  return <div className="singles__items">{singleItems}</div>;
};

export default SinglesList;
