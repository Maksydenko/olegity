import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Item(props) {
  const { t } = useTranslation();
  const { link } = props;

  return (
    <li className="navigation__item">
      <Link to={link.path} className="navigation__link">
        {t(link.value)}
      </Link>
    </li>
  );
}

export default Item;
