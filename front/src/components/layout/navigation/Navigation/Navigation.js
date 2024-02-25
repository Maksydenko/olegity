import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

import { links } from "@layout/navigation/links.const";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="footer__navigation navigation">
      <h5 className="navigation__title">{t("navigation")}</h5>
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
