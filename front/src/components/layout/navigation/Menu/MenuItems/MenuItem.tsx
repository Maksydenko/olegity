import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import MenuSubList from "./MenuSubList";

import { compareLinksValueWithPathname } from "@/utils/compareLinksValueWithPathname.util";

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
  const { t } = useTranslation();

  const isActiveSubLink =
    subLinks && compareLinksValueWithPathname(subLinks, pathname);
  const isActive = value === pathname || isActiveSubLink;

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

  const Tag = value ? Link : "span";

  return (
    <li className={clsx("menu__item", isActive && "menu__item_active")}>
      <Tag className="menu__link" href={value || ""} onClick={onClick}>
        {t(label)}
      </Tag>
    </li>
  );
};

export default MenuItem;
