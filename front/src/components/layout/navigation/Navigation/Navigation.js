import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

import { links } from "@layout/navigation/links.const";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="footer__navigation navigation">
      <h3 className="navigation__title">{t("navigation")}</h3>
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
