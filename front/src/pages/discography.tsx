import { InferGetStaticPropsType, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Discography from "@/components/screens/Discography/Discography";

import { IGetStaticProps, IQuery } from "@/interfaces/getStaticProps.interface";

const DiscographyPage: NextPage<
  InferGetStaticPropsType<typeof getServerSideProps>
> = () => {
  return <Discography />;
};

export default DiscographyPage;

interface IDiscographyGetStaticProps extends IGetStaticProps {
  query: IQuery;
}

export const getServerSideProps = async ({
  locale,
}: IDiscographyGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
