import { ElementType, FC, ReactNode, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

import Items from "./Items/Items";

import { IDropdown } from "./dropdown.interface";

interface DropdownProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  items: IDropdown[];
  path?: string;
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
  path,
  hover,
  disabled,
  icon,
  onClick,
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

  const Tag = path ? "a" : "span";

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
              {...(path && {
                href: path,
                onClick: () => {
                  close();

                  if (onClick) {
                    onClick();
                  }
                },
              })}
            >
              {children}
            </Tag>
            {icon && (
              <div
                className={clsx(
                  "dropdown__arrow",
                  open && "dropdown__arrow_active"
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
            <Items onClick={onClick}>{items}</Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
