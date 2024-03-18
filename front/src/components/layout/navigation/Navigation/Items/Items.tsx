import { FC } from "react";

import Item from "./Item";

import { INavLink } from "@/interfaces/link.interface";

interface ItemsProps {
  links: INavLink[];
}

const Items: FC<ItemsProps> = ({ links }) => {
  const items = links.map((link) => {
    const { label } = link;

    return <Item key={label} link={link} />;
  });

  return <ul className="navigation__list">{items}</ul>;
};

export default Items;
