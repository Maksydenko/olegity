import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NotFound from "@/components/screens/NotFound/NotFound";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface NotFoundPageProps {}

const NotFoundPage: NextPage<NotFoundPageProps> = ({}) => {
  return <NotFound />;
};

export default NotFoundPage;

interface INotFoundGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: INotFoundGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
