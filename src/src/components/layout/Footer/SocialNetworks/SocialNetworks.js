import { useTranslation } from "react-i18next";

import Items from "./Items/Items";

import links from "./links";

const SocialNetworks = () => {
  const { t } = useTranslation();

  return (
    <div className="footer__social-networks social-networks">
      <h4 className="social-networks__title">{t("social-networks")}</h4>
      <ul className="social-networks__list">
        <Items links={links} />
      </ul>
    </div>
  );
};

export default SocialNetworks;
