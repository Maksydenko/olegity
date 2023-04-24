import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

const Navigation = ({ className, links }) => {
  const { t } = useTranslation();

  return (
    <nav className={`${className}__navigation navigation`}>
      <h4 className="navigation__title">{t("navigation")}</h4>
      <ul className="navigation__list">
        <Items links={links} />
      </ul>
    </nav>
  );
};

export default Navigation;
