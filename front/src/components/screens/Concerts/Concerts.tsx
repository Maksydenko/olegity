import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import Loader from "@/components/shared/Loader/Loader";
import AboutConcerts from "./AboutConcerts/AboutConcerts";
import Gallery from "./Gallery/Gallery";

interface ConcertsProps {}

const Concerts: FC<ConcertsProps> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout className="concerts-page">
      <Seo title={t("pages.concerts")} />
      <AboutConcerts className="concerts-page__about-concerts" />
      <Gallery className="concerts-page__gallery" />
    </Layout>
  );
};

export default Concerts;
