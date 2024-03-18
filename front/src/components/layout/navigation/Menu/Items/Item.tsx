import { FC } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SubList from "./SubList";

import { INavLink, INavLinkWithSubLinks } from "@/interfaces/link.interface";

interface ItemProps {
  link: INavLink;
  breakpoint: boolean;
  onClick?: () => void;
}

const Item: FC<ItemProps> = ({ link, breakpoint, onClick }) => {
  const { label } = link;
  const value = link?.value;
  const subLinks = link?.subLinks;

  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = value === pathname;

  if (subLinks) {
    return (
      <SubList
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

export default Item;
