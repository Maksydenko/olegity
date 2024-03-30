import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import Music from "./Music/Music";

interface DiscographyProps {}

const Discography: FC<DiscographyProps> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout className="discography-page">
      <Seo title={t("pages.discography")} />
      <Music className="discography-page__music" />
    </Layout>
  );
};

export default Discography;
