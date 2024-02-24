import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Item = ({ link: { value, href } }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = pathname === href;

  return (
    <li className="navigation__item">
      <Link
        className={clsx(
          "navigation__link",
          isActive && "navigation__link_active"
        )}
        to={href}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
