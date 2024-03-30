import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Discography from "@/components/screens/Discography/Discography";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface DiscographyPageProps {}

const DiscographyPage: NextPage<DiscographyPageProps> = () => {
  return <Discography />;
};

export default DiscographyPage;

interface IDiscographyGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({
  locale,
}: IDiscographyGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
