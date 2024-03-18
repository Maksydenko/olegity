"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { INavLink } from "@/interfaces/link.interface";

interface ItemProps {
  link: INavLink;
}

const Item: FC<ItemProps> = ({ link }) => {
  const { label } = link;
  const value = link?.value;

  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = value === pathname;

  const Tag = value ? "a" : "span";

  return (
    <li className="navigation__item">
      <Tag
        className={clsx(
          "navigation__link",
          isActive && "navigation__link_active"
        )}
        {...(value && {
          href: value,
        })}
      >
        {label}
      </Tag>
    </li>
  );
};

export default Item;
