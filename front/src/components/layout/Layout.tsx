import { FC, ReactNode } from "react";
import { i18n } from "next-i18next";
import clsx from "clsx";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ScrollTop from "./navigation/ScrollTop/ScrollTop";
import Seo from "./Seo/Seo";

import { fontMontserrat, fontOpenSans } from "@/constants/fonts/google.const";
import { fontIcons } from "@/constants/fonts/icons.const";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  const currentLanguage = i18n?.language;

  const isEnglish = currentLanguage === "en";
  const locale = isEnglish ? "en_US" : "uk_UA";

  return (
    <div
      className={clsx(
        className,
        "layout",
        fontMontserrat.variable,
        fontOpenSans.variable,
        fontIcons.variable
      )}
    >
      <Seo
        description="See about LSP, links to all his albums and songs, videos, information performs, gallery of photos from concerts on this site"
        additionalMetaTags={[
          "lsp",
          "лсп",
          "oleg lsp",
          "олег лсп",
          "olegi lsp",
          "олеги лсп",
          "artist lsp",
          "артист лсп",
        ]}
        openGraph={{
          url: "https://olegity.vercel.app",
          type: "website",
          title: "Olegity",
          description:
            "See about LSP, links to all his albums and songs, videos, information performs, gallery of photos from concerts on this site",
          images: [
            {
              url: "https://raw.githubusercontent.com/Maksydenko/olegity/master/front/public/img/favicon/android-chrome-512x512.png",
              alt: "Olgt",
            },
          ],
          locale,
          siteName: "Olegity",
          profile: {
            firstName: "Maksym",
            lastName: "Davdenko",
            username: "Maksydenko",
            gender: "male",
          },
        }}
        twitter={{
          handle: "Maksydenko",
          site: "@Maksydenko",
          cardType: "summary",
        }}
      />
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Layout;
