import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Concerts from "@/components/screens/Concerts/Concerts";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface ConcertsPageProps {}

const ConcertsPage: NextPage<ConcertsPageProps> = ({}) => {
  return <Concerts />;
};

export default ConcertsPage;

interface IConcertsGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IConcertsGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
