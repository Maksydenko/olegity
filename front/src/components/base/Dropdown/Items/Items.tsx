import { FC, ReactNode } from "react";
import { Menu } from "@headlessui/react";

import Item from "./Item";

interface ItemsProps {
  children: ReactNode[];
}

const Items: FC<ItemsProps> = ({ children }) => {
  const menuItems = children.map((item, index) => {
    const isStringItem = typeof item === "string";
    const menuItem = isStringItem ? <span>{item}</span> : <>{item}</>;

    return <Item key={index}>{menuItem}</Item>;
  });

  return <Menu.Items className="dropdown__items">{menuItems}</Menu.Items>;
};

export default Items;
