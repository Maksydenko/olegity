import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Navigation from "@layout/navigation/Navigation/Navigation";

import logo from "@img/logos/olgt.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Olgt" />
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
