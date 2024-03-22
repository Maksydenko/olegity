import { FC } from "react";
import SocialNetworksItem from "./SocialNetworksItem";

import { ILink } from "@/interfaces/link.interface";

interface SocialNetworksListProps {
  links: ILink[];
}

const SocialNetworksList: FC<SocialNetworksListProps> = ({ links }) => {
  const linkItems = links.map((link) => {
    const { label } = link;

    return <SocialNetworksItem key={label} link={link} />;
  });

  return <ul className="social-networks__list">{linkItems}</ul>;
};

export default SocialNetworksList;
