import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "@/components/screens/Home/Home";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";
import { DiscographyService } from "@/services/discography.service";
import { IAlbum } from "@/interfaces/music.interface";
import useAlbumsStore from "@/stores/useAlbums.store";

interface HomePageProps {
  albums: IAlbum[];
}

const HomePage: NextPage<HomePageProps> = ({ albums }) => {
  const { setAlbums } = useAlbumsStore();

  useEffect(() => {
    setAlbums(albums);
  }, []);

  return <Home />;
};

export default HomePage;

interface IHomeGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IHomeGetStaticProps) => {
  const albums = await DiscographyService.getAlbums();

  return {
    props: {
      albums,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
