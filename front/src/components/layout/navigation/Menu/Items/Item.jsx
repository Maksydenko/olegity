import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path }, onClick }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = path === pathname;

  return (
    <li className={clsx("menu__item", isActive && "menu__item_active")}>
      <Link
        className="menu__link"
        {...(!isActive && {
          to: path,
          onClick,
        })}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
