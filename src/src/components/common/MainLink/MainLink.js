import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainLink = ({ className, link }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}__main-link main-link`}>
      <Link to={link.path}>{t(link.value)}</Link>
    </div>
  );
};

export default MainLink;
