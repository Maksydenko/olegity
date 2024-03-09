import Link from "next/link";
// import { useTranslation } from "next-i18next";

import Img from "@/components/base/Img/Img";
import Navigation from "@/components/layout/navigation/Navigation/Navigation";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

import logo from "@/assets/img/logos/olgt.svg";

const Footer = () => {
  // const { t } = useTranslation();
  const img = {
    src: logo,
    alt: "Olgt",
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <Link href="/" className="footer__logo">
            <Img className="footer__img" img={img} svg loader={false} />
          </Link>
          <p className="footer__description">{"footer-description"}</p>
        </div>
        <SocialNetworks />
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
