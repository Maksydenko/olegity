import { FC } from "react";
import Item from "./Item";

import { ILink } from "@/interfaces/link.interface";

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => {
  const items = links.map((link) => {
    const { label } = link;

    return <Item key={label} link={link} />;
  });

  return <ul className="social-networks__list">{items}</ul>;
};

export default Items;
