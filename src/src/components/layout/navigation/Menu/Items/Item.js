import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Item = ({ link, onClick }) => {
  const { t } = useTranslation();

  return (
    <li className="menu__item">
      <Link to={link.path} className="menu__link" onClick={onClick}>
        {t(link.value)}
      </Link>
    </li>
  );
};

export default Item;
