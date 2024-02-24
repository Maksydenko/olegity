import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path }, onClick }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = path === pathname;

  return (
    <li className="menu__item">
      <Link
        className={clsx("menu__link", isActive && "menu__link_active")}
        to={path}
        onClick={onClick}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
