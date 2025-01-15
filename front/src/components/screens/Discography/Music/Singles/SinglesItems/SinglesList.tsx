import { FC } from "react";

import SinglesItem from "./SinglesItem";

import { ISingle } from "@/interfaces/music.interface";

interface SinglesProps {
  singles: ISingle[];
}

const SinglesList: FC<SinglesProps> = ({ singles }) => {
  const singleItems = singles.map((single) => {
    const { ID } = single;

    return <SinglesItem key={ID} single={single} />;
  });

  return <div className="singles__list">{singleItems}</div>;
};

export default SinglesList;
