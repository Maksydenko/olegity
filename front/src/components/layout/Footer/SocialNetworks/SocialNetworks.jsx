import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

import links from "./links.const";

const SocialNetworks = () => {
  const { t } = useTranslation();

  return (
    <div className="footer__social-networks social-networks">
      <h6 className="social-networks__title">{t("social-networks")}</h6>
      <Items links={links} />
    </div>
  );
};

export default SocialNetworks;
