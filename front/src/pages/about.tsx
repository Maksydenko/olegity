import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "@/components/screens/About/About";

import useAboutStore from "@/stores/useAbout.store";

import { AboutService } from "@/services/about.service";

import { IAbout } from "@/interfaces/about.interface";
import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface AboutPageProps {
  about: IAbout[];
}

const AboutPage: NextPage<AboutPageProps> = ({ about }) => {
  const { setAbout } = useAboutStore();

  useEffect(
    () => {
      setAbout(about);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  return <About />;
};

export default AboutPage;

interface IAboutGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IAboutGetStaticProps) => {
  const about = await AboutService.getAbout();

  return {
    props: {
      about,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
