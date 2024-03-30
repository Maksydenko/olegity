import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import FooterList from "./Items/FooterList";

import { navLinks } from "@/data/navLinks.data";
import socialLinks from "./socialLinks.data";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation(["common"]);

  return (
    <footer className={clsx(className, "footer")}>
      <div className="footer__container">
        <div className="footer__main">
          <Link href="/" className="footer__logo">
            <Img
              className="footer__img"
              src="/img/logos/olgt.svg"
              alt="Olgt"
              svg
              loader={false}
            />
          </Link>
          <p className="footer__description">{t("footer-description")}</p>
        </div>
        <FooterList
          className="_big"
          title={t("social-networks")}
          links={socialLinks}
          target="_blank"
        />
        <FooterList
          className="_small"
          title={t("navigation")}
          links={navLinks}
        />
      </div>
    </footer>
  );
};

export default Footer;
