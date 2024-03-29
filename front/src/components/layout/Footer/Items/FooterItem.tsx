"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { ILink, INavLink } from "@/interfaces/link.interface";
import { compareLinksValueWithPathname } from "@/interfaces/compareLinksValueWithPathname.util";

interface FooterItemProps {
  link: ILink | INavLink;
}

const FooterItem: FC<FooterItemProps> = ({ link }) => {
  const { label, value } = link;

  const isINavLink = (item: ILink | INavLink): item is INavLink => {
    return "subLinks" in item;
  };
  const subLinks = isINavLink(link) ? link.subLinks : null;

  const isILink = (item: ILink | INavLink): item is ILink => {
    return "icon" in item;
  };
  const icon = isILink(link) ? link.icon : null;

  // const { t } = useTranslation();
  const pathname = usePathname();

  const isActiveSubLink =
    subLinks && compareLinksValueWithPathname(subLinks, pathname);
  const isActive = value === pathname || isActiveSubLink;

  const Tag = value ? "a" : "span";

  return (
    <li className="footer__item">
      <Tag
        className={clsx(
          "footer__link",
          isActive && "footer__link_active",
          icon && `_icon-${icon}`
        )}
        target="_blank"
        rel="noReferrer"
        {...(value && {
          href: value,
        })}
      >
        {label}
      </Tag>
    </li>
  );
};

export default FooterItem;
