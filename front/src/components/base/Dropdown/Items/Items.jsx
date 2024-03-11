import { Menu } from "@headlessui/react";

import Item from "./Item";

const Items = ({ children, onClick }) => {
  const menuItems = children.map((item) => {
    const { id, value } = item;
    const path = item?.path;
    const target = item?.target;

    const isValueIsString = typeof value === "string";

    const menuItem = isValueIsString ? <span>{value}</span> : value;

    return (
      <Item
        key={id}
        onClick={onClick}
        {...(isValueIsString && {
          path,
          target,
        })}
      >
        {menuItem}
      </Item>
    );
  });

  return <Menu.Items className="dropdown__items">{menuItems}</Menu.Items>;
};

export default Items;
