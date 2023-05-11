import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Item({ link }) {
  const { t } = useTranslation();

  return (
    <li className="navigation__item">
      <Link to={link.path} className="navigation__link">
        {t(link.value)}
      </Link>
    </li>
  );
}

export default Item;
