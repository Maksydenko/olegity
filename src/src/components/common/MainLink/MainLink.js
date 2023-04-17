import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MainLink(props) {
  const { t } = useTranslation();
  const { className, link } = props;

  return (
    <div className={`${className}__main-link main-link`}>
      <Link to={link.path}>{t(link.value)}</Link>
    </div>
  );
}

export default MainLink;
