import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Item = ({ link: { value, href }, onClick }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = href === pathname;

  return (
    <li className="menu__item">
      <Link
        className={clsx("menu__link", isActive && "menu__link_active")}
        to={href}
        onClick={onClick}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
