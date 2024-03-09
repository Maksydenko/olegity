// import { useTranslation } from "next-i18next";

import Items from "./Items/Items";

import { links } from "@/components/layout/navigation/links.const";

const Navigation = () => {
  // const { t } = useTranslation();

  return (
    <nav className="footer__navigation navigation">
      <h6 className="navigation__title">{"navigation"}</h6>
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
