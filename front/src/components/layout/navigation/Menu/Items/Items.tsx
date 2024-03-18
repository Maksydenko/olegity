import { FC } from "react";

import Item from "./Item";

import { INavLink } from "@/interfaces/link.interface";

interface ItemsProps {
  links: INavLink[];
  breakpoint: boolean;
  onClick?: () => void;
}

const Items: FC<ItemsProps> = ({ links, breakpoint, onClick }) => {
  const items = links.map((link) => {
    const { label } = link;

    return (
      <Item key={label} link={link} breakpoint={breakpoint} onClick={onClick} />
    );
  });

  return <ul className="menu__list">{items}</ul>;
};

export default Items;
