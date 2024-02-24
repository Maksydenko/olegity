import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainLink = ({ className, link }) => {
  const { t } = useTranslation();

  return (
    <Link className={`${className}__main-link main-link`} to={link.path}>
      {t(link.value)}
    </Link>
  );
};

export default MainLink;
