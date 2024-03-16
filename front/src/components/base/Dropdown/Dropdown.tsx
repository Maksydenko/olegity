import { ElementType, FC, ReactNode, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

import Items from "./Items/Items";

interface DropdownProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  items: ReactNode[];
  value?: string;
  hover?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

const Dropdown: FC<DropdownProps> = ({
  as = "div",
  className,
  children,
  items,
  value,
  hover,
  disabled,
  icon = <span className="dropdown__arrow"></span>,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (disabled) {
      handleClose();
    }
  }, [disabled]);

  const Tag = value ? "a" : "span";

  return (
    <Menu
      as={as}
      className={clsx(className, "dropdown")}
      {...(hover && {
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
      })}
    >
      {({ open, close }) => (
        <>
          <Menu.Button className="dropdown__button" disabled={disabled}>
            <Tag
              {...(value && {
                href: value,
                onClick: () => {
                  close();
                },
              })}
            >
              {children}
            </Tag>
            {icon && (
              <div
                className={clsx(
                  "dropdown__icon",
                  (open || isOpen) && "dropdown__icon_active"
                )}
              >
                {icon}
              </div>
            )}
          </Menu.Button>
          <Transition
            appear
            show={open}
            {...(hover && {
              show: isOpen,
            })}
            enter="dropdown__enter"
            enterFrom="dropdown__enter-from"
            enterTo="dropdown__enter-to"
            leave="dropdown__leave"
            leaveFrom="dropdown__leave-from"
            leaveTo="dropdown__leave-to"
          >
            <Items>{items}</Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
