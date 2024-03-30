import { FC, HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { compareLinksValueWithPathname } from "@/utils/compareLinksValueWithPathname.util";

import { ILink, INavLink } from "@/interfaces/link.interface";

interface FooterItemProps {
  link: ILink | INavLink;
  target?: HTMLAttributeAnchorTarget;
}

const FooterItem: FC<FooterItemProps> = ({ link, target = "_self" }) => {
  const { label, value } = link;

  const isINavLink = (item: ILink | INavLink): item is INavLink => {
    return "subLinks" in item;
  };
  const subLinks = isINavLink(link) ? link.subLinks : null;

  const isILink = (item: ILink | INavLink): item is ILink => {
    return "icon" in item;
  };
  const icon = isILink(link) ? link.icon : null;

  const { t } = useTranslation();
  const pathname = usePathname();

  const isActiveSubLink =
    subLinks && compareLinksValueWithPathname(subLinks, pathname);
  const isActive = value === pathname || isActiveSubLink;

  const Tag = value ? Link : "span";

  return (
    <li className="footer__item">
      <Tag
        className={clsx(
          "footer__link",
          isActive && "footer__link_active",
          icon && `_icon-${icon}`
        )}
        href={value || ""}
        target={target}
        rel="noReferrer"
      >
        {t(label)}
      </Tag>
    </li>
  );
};

export default FooterItem;
