import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Img from "@base/Img/Img";
import Navigation from "@layout/navigation/Navigation/Navigation";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

import logo from "@img/logos/olgt.svg";

const Footer = () => {
  const { t } = useTranslation();

  const img = {
    src: logo,
    alt: "Olgt",
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <Link to="/" className="footer__logo">
            <Img className="footer__img" img={img} svg />
          </Link>
          <p className="footer__description">{t("footer-description")}</p>
        </div>
        <SocialNetworks />
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
