import { FC } from "react";
import Link from "next/link";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import Navigation from "@/components/layout/navigation/Navigation/Navigation";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  // const { t } = useTranslation();
  const img = {
    src: "/img/logos/olgt.svg",
    alt: "Olgt",
  };

  return (
    <footer className={clsx(className, "footer")}>
      <div className="footer__container">
        <div className="footer__main">
          <Link href="/" className="footer__logo">
            <Img className="footer__img" img={img} svg loader={false} />
          </Link>
          <p className="footer__description">{"footer-description"}</p>
        </div>
        <SocialNetworks className="footer__social-networks" />
        <Navigation className="footer__navigation" />
      </div>
    </footer>
  );
};

export default Footer;
