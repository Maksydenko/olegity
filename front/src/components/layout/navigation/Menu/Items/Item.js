import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item = ({ link: { value, href }, onClick }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isActive = pathname === href;

  return (
    <li className="menu__item">
      <Link
        to={href}
        className={`menu__link${isActive ? " menu__link_active" : ""}`}
        onClick={onClick}
      >
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
