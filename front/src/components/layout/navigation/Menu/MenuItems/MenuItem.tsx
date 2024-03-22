import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import MenuSubList from "./MenuSubList";

import { INavLink, INavLinkWithSubLinks } from "@/interfaces/link.interface";

interface MenuItemProps {
  link: INavLink;
  breakpoint: boolean;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ link, breakpoint, onClick }) => {
  const { label } = link;
  const value = link?.value;
  const subLinks = link?.subLinks;

  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = value === pathname;

  if (subLinks) {
    return (
      <MenuSubList
        link={link as INavLinkWithSubLinks}
        active={isActive}
        breakpoint={breakpoint}
        onClick={onClick}
      />
    );
  }

  const Tag = value ? "a" : "span";

  return (
    <li className={clsx("menu__item", isActive && "menu__item_active")}>
      <Tag
        className="menu__link"
        {...(value && {
          href: value,
        })}
        onClick={onClick}
      >
        {label}
      </Tag>
    </li>
  );
};

export default MenuItem;
