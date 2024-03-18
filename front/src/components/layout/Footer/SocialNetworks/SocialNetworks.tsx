import { FC } from "react";
import clsx from "clsx";
// import { useTranslation } from "next-i18next";

import Items from "./Items/Items";

import links from "./links.data";

interface SocialNetworksProps {
  className?: string;
}

const SocialNetworks: FC<SocialNetworksProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <div className={clsx(className, "footer__social-networks social-networks")}>
      <h6 className="social-networks__title">{"social-networks"}</h6>
      <Items links={links} />
    </div>
  );
};

export default SocialNetworks;
