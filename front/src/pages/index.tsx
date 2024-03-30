import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "@/components/screens/Home/Home";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = ({}) => {
  return <Home />;
};

export default HomePage;

interface IHomeGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IHomeGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
