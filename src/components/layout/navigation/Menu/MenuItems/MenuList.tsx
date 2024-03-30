import { FC } from "react";

import MenuItem from "./MenuItem";

import { INavLink } from "@/interfaces/link.interface";

interface MenuListProps {
  links: INavLink[];
  breakpoint: boolean;
  onClick?: () => void;
}

const MenuList: FC<MenuListProps> = ({ links, breakpoint, onClick }) => {
  const linkItems = links.map((link) => {
    const { label } = link;

    return (
      <MenuItem
        key={label}
        link={link}
        breakpoint={breakpoint}
        onClick={onClick}
      />
    );
  });

  return <ul className="menu__list">{linkItems}</ul>;
};

export default MenuList;
