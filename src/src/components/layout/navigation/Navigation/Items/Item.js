import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = ({ link: { value, href } }) => {
  const { t } = useTranslation();

  return (
    <li className="navigation__item">
      <Link to={href} className="navigation__link">
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
