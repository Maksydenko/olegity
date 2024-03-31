import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import AllVideos from "./AllVideos/AllVideos";

interface VideosProps {}

const Videos: FC<VideosProps> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout className="videos-page">
      <Seo title={t("pages.videos")} />
      <AllVideos className="videos-page__all-videos" />
    </Layout>
  );
};

export default Videos;
