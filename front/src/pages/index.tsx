import { InferGetStaticPropsType, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "@/components/screens/Home/Home";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

const HomePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
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
