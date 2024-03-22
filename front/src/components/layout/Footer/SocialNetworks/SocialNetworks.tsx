import { FC } from "react";
import clsx from "clsx";
// import { useTranslation } from "next-i18next";

import SocialNetworksList from "./SocialNetworksItems/SocialNetworksList";

import socialNetworksLinks from "./socialNetworksLinks.data";

interface SocialNetworksProps {
  className?: string;
}

const SocialNetworks: FC<SocialNetworksProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <div className={clsx(className, "footer__social-networks social-networks")}>
      <h6 className="social-networks__title">{"social-networks"}</h6>
      <SocialNetworksList links={socialNetworksLinks} />
    </div>
  );
};

export default SocialNetworks;
