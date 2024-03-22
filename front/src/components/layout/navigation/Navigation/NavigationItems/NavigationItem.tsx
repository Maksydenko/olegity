"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { INavLink } from "@/interfaces/link.interface";

interface NavigationItemProps {
  link: INavLink;
}

const NavigationItem: FC<NavigationItemProps> = ({ link }) => {
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

export default NavigationItem;
