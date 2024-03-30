import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import AboutSections from "./AboutSections/AboutSections";
import UkraineSupport from "./UkraineSupport/UkraineSupport";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { t } = useTranslation("common");

  return (
    <Layout className="about-page">
      <Seo title={t("pages.about")} />
      <AboutSections className="about-page__about-sections" />
      <UkraineSupport className="about-page__ukraine-support" />
    </Layout>
  );
};

export default About;
