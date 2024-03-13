import { FC, ReactNode } from "react";
// import { dir } from "i18next";

import Header from "@/components/layout/Header/Header";
import ScrollTop from "@/components/layout/navigation/ScrollTop/ScrollTop";
import Footer from "@/components/layout/Footer/Footer";

// import { languages } from "@/app/i18n/settings";
import "./globals.scss";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: [
    "latin",
    //  'cyrillic-ext'
  ],
});

export const metadata = {
  title: "",
  // A brief description of the page
  description: "",
  // Key words of the page
  keywords: "",
  // Search robots access control to the page
  robots: "",
  copyright: "",
  twitter: {
    // Card type, summary is used by default
    card: "",
    // Page name
    title: "",
    // Page description
    description: "",
  },
  openGraph: {
    // Site localization, for the English-language site en_US
    locale: "",
    // Type of content
    // type: "website",
    // The title of the page that will be displayed in the recording of the social network
    title: "",
    // Page description
    description: "",
    // Link to the current page
    url: "",
    // Name of the site
    siteName: "",
  },
};

interface RootLayoutProps {
  children: ReactNode;
  // params: {
  //   lng: string;
  // };
}

const RootLayout: FC<RootLayoutProps> = ({
  children,
  //  params: { lng }
}) => (
  <html
    id="html"
    // lang={lng}
    // dir={dir(lng)}
  >
    <head>
      {/* <meta charset="utf-8" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      {/* Disconnects the formation of a link by the phone number on iOS */}
      {/* <meta name="format-detection" content="telephone=no" /> */}
      {/* The author of the page */}
      {/* <meta name="author" content="" /> */}
      {/* Copyright */}
      {/* <meta name="copyright" content="" /> */}
      {/* The address of the author */}
      {/* <meta name="address" content="" /> */}
      {/* System on the image */}
      {/* <meta name="twitter:image" content="" /> */}
      {/* Site localization, for the Ukrainian-language site uk_UA */}
      {/* <meta property="og:locale:alternate" content="uk_UA" /> */}
      {/* Link to the image that will be published in the recording */}
      {/* <meta property="og:image" content="" /> */}
      {/* <meta property="og:image:alt" content="" /> */}
      {/* <link rel="apple-touch-icon" href="" /> */}
    </head>
    <body
    // className={inter.className}
    >
      <div className="layout">
        <Header />
        {children}
        <ScrollTop />
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;

// export const generateStaticParams = () => {
//   return languages.map((lng) => {
//     return { lng };
//   });
// };
