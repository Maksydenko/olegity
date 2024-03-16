import { FC, ReactNode, useState } from "react";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

interface ItemProps {
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleDeactivate = () => {
    setIsActive(false);
  };

  return (
    <Menu.Item
      as="div"
      className={clsx("dropdown__item", isActive && "dropdown__item_active")}
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
