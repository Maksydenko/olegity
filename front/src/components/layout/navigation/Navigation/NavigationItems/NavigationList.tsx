import { FC } from "react";

import NavigationItem from "./NavigationItem";

import { INavLink } from "@/interfaces/link.interface";

interface NavigationListProps {
  links: INavLink[];
}

const NavigationList: FC<NavigationListProps> = ({ links }) => {
  const linkItems = links.map((link) => {
    const { label } = link;

    return <NavigationItem key={label} link={link} />;
  });

  return <ul className="navigation__list">{linkItems}</ul>;
};

export default NavigationList;
