import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html id="html">
      <Head>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Disconnects the formation of a link by the phone number on iOS */}
        {/* <meta name="format-detection" content="telephone=no" /> */}
        {/* The author of the page */}
        <meta name="author" content="Maksydenko" />
        {/* Copyright */}
        <meta name="copyright" content="Maksydenko" />
        {/* The address of the author */}
        <meta name="address" content="Kyiv, Ukraine" />
        {/* Page name */}
        <meta name="twitter:title" content="Olegity" />
        {/* Page description */}
        <meta
          name="twitter:description"
          content="See about LSP, links to all his albums and songs, videos, information performs, gallery of photos from concerts on this site"
        />
        {/* System on the image */}
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Maksydenko/olegity/master/public/img/favicon/android-chrome-512x512.png"
        />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicon/safari-pinned-tab.svg"
          color="#333"
        />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
