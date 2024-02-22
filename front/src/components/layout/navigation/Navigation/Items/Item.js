import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item = ({ link: { value, href } }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = pathname === href;

  return (
    <li className="navigation__item">
      <Link
        to={href}
        className={`navigation__link${
          isActive ? " navigation__link_active" : ""
        }`}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
