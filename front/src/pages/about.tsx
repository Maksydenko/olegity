import { InferGetStaticPropsType, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "@/components/screens/About/About";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

const AboutPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({}) => {
  return <About />;
};

export default AboutPage;

interface IAboutGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IAboutGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
