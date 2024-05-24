import { FC, ReactNode } from "react";
import clsx from "clsx";

import { Menu } from "@headlessui/react";

interface DropdownItemProps {
  children: ReactNode;
}

const DropdownItem: FC<DropdownItemProps> = ({ children }) => {
  return (
    <Menu.Item as="div" className="dropdown__item">
      {({ active }) => {
        return <div className={clsx(active && "_active")}>{children}</div>;
      }}
    </Menu.Item>
  );
};

export default DropdownItem;
