import { FC, ReactNode } from "react";
import { Menu } from "@headlessui/react";

import DropdownItem from "./DropdownItem";

interface DropdownListProps {
  children: ReactNode[];
}

const DropdownList: FC<DropdownListProps> = ({ children }) => {
  const menuItems = children.map((item, index) => {
    const isStringItem = typeof item === "string";
    const menuItem = isStringItem ? <span>{item}</span> : <>{item}</>;

    return <DropdownItem key={index}>{menuItem}</DropdownItem>;
  });

  return <Menu.Items className="dropdown__list">{menuItems}</Menu.Items>;
};

export default DropdownList;
