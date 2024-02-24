import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const MainLink = ({ className, link: { path, value } }) => {
  const { t } = useTranslation();

  return (
    <Link className={clsx(className, "main-link")} to={path}>
      {t(value)}
    </Link>
  );
};

export default MainLink;
