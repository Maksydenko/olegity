"use client";

import { usePathname } from "next/navigation";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path } }) => {
  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = path === pathname;

  const Tag = path ? "a" : "span";

  return (
    <li className="navigation__item">
      <Tag
        className={clsx(
          "navigation__link",
          isActive && "navigation__link_active"
        )}
        {...(path && {
          href: path,
        })}
      >
        {value}
      </Tag>
    </li>
  );
};

export default Item;
