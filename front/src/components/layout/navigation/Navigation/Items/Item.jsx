import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path } }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = path === pathname;

  return (
    <li className="navigation__item">
      <Link
        className={clsx(
          "navigation__link",
          isActive && "navigation__link_active"
        )}
        {...(!isActive && {
          to: path,
        })}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
