import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import AboutMain from "./AboutMain/AboutMain";
import AlbumsMain from "./AlbumsMain/AlbumsMain";
import ConcertsMain from "./ConcertsMain/ConcertsMain";
import FullScreenVideo from "./FullScreenVideo/FullScreenVideo";
import VideosMain from "./VideosMain/VideosMain";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout className="home-page">
      <Seo title={t("pages.home")} />
      <FullScreenVideo className="home-page__full-screen-video" />
      <AboutMain className="home-page__about-main" />
      <AlbumsMain className="home-page__albums-main" />
      <VideosMain className="home-page__videos-main" />
      <ConcertsMain className="home-page__concerts-main" />
    </Layout>
  );
};

export default HomePage;
