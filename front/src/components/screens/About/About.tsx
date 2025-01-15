import { FC } from "react";
import { useTranslation } from "next-i18next";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import Loader from "@/components/shared/Loader/Loader";
import AboutSections from "./AboutSections/AboutSections";

import { AboutService } from "@/services/about.service";

import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { t } = useTranslation("common");
  const supabase = useSupabaseClient<IDatabase>();

  const { data: aboutData, isLoading } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.About],
    queryFn: async () => {
      const response = await AboutService.getAbout(supabase);

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  return (
    <Layout className="about-page">
      <Seo title={t("pages.about")} />
      {isLoading ? (
        <Loader />
      ) : (
        <AboutSections
          className="about-page__about-sections"
          about={aboutData || []}
        />
      )}
    </Layout>
  );
};

export default About;
