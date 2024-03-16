import { FC } from "react";
// import { useTranslation } from "next-i18next";

import Items from "./Items/Items";

import links from "./links.const";

interface SocialNetworksProps {}

const SocialNetworks: FC<SocialNetworksProps> = () => {
  // const { t } = useTranslation();

  return (
    <div className="footer__social-networks social-networks">
      <h6 className="social-networks__title">{"social-networks"}</h6>
      <Items links={links} />
    </div>
  );
};

export default SocialNetworks;
