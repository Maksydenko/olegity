import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Videos from "@/components/screens/Videos/Videos";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";

interface VideosPageProps {}

const VideosPage: NextPage<VideosPageProps> = ({}) => {
  return <Videos />;
};

export default VideosPage;

interface IVideosGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IVideosGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
