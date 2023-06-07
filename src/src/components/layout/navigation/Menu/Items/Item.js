import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = ({ link: { value, href }, onClick }) => {
  const { t } = useTranslation();

  return (
    <li className="menu__item">
      <Link to={href} className="menu__link" onClick={onClick}>
        {t(value)}
      </Link>
    </li>
  );
};

export default Item;
