import { useState } from "react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

const Item = ({ children, path, target = "_self", onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  return (
    <Menu.Item
      as={path ? "a" : "span"}
      className={clsx("dropdown__item", isActive && "dropdown__item_active")}
      onClick={onClick}
      {...(path && {
        href: path,
        target,
      })}
    >
      {({ active }) => {
        active && handleActivate();
        !active && handleDeactivate();

        return <>{children}</>;
      }}
    </Menu.Item>
  );
};

export default Item;
