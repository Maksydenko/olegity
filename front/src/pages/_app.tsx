import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "@/scss/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
