"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path } }) => {
  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = path === pathname;

  return (
    <li className="navigation__item">
      <Link
        className={clsx(
          "navigation__link",
          isActive && "navigation__link_active"
        )}
        href={path}
      >
        {value}
      </Link>
    </li>
  );
};

export default Item;
