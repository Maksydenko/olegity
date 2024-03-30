import { FC, HTMLAttributeAnchorTarget } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import FooterItem from "./FooterItem";

import { ILink, INavLink } from "@/interfaces/link.interface";

interface SocialNetworksProps {
  className?: string;
  title: string;
  links: (ILink | INavLink)[];
  target?: HTMLAttributeAnchorTarget;
}

const FooterList: FC<SocialNetworksProps> = ({
  className,
  title,
  links,
  target,
}) => {
  const linkItems = links.map((link) => {
    const { label } = link;

    return <FooterItem key={label} link={link} target={target} />;
  });

  return (
    <div className={clsx("footer__list", className)}>
      <h6 className="footer__title">{title}</h6>
      <ul className="footer__list">{linkItems}</ul>
    </div>
  );
};

export default FooterList;
