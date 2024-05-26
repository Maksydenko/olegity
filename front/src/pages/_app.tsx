import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { QueryProvider } from "@/providers/query.provider";

import "@/scss/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"
        />
      </Head>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </>
  );
};

export default appWithTranslation(App);
