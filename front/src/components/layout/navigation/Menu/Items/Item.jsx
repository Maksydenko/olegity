"use client";

import Link from "next/link";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path }, onClick }) => {
  // const { pathname } = useLocation();
  // const { t } = useTranslation();

  // const isActive = path === pathname;

  return (
    <li
      className={clsx(
        "menu__item"
        // isActive && "menu__item_active"
      )}
    >
      <Link
        className="menu__link"
        href={path}
        onClick={onClick}
        // {...(!isActive && {
        //   to: path,
        //   onClick,
        // })}
      >
        {value}
      </Link>
    </li>
  );
};

export default Item;
