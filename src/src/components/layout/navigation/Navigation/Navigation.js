import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

import { links } from "../links.const";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="footer__navigation navigation">
      <h4 className="navigation__title">{t("navigation")}</h4>
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
