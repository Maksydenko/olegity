import { FC } from "react";

import Item from "./Item";
import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface ItemsProps {
  languages: ILinkWithoutIcon[];
  onClick?: () => void;
}

const Items: FC<ItemsProps> = ({ languages, onClick }) => {
  return languages.map((language) => {
    const { label } = language;

    return <Item key={label} language={language} onClick={onClick} />;
  });
};

export default Items;
