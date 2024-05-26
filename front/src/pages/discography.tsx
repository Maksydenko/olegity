import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Discography from "@/components/screens/Discography/Discography";

import useAlbumsStore from "@/stores/useAlbums.store";

import { DiscographyService } from "@/services/discography.service";

import { IGetStaticProps, IQuery } from "@/interfaces/getStaticProps.interface";
import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface DiscographyPageProps {
  albums: IAlbum[];
  ep: IAlbum[];
  singles: ISingle[];
}

const DiscographyPage: NextPage<DiscographyPageProps> = ({
  albums,
  ep,
  singles,
}) => {
  const { setAlbums } = useAlbumsStore();

  useEffect(() => {
    setAlbums(albums);
  }, []);

  return <Discography albums={albums} ep={ep} singles={singles} />;
};

export default DiscographyPage;

interface IDiscographyGetStaticProps extends IGetStaticProps {
  query: IQuery;
}

export const getServerSideProps = async ({
  query,
  locale,
}: IDiscographyGetStaticProps) => {
  const queryPage = query?.page || 1;

  const albums = await DiscographyService.getAlbums();
  const ep = await DiscographyService.getEP();
  const singles = await DiscographyService.getSingles();

  return {
    props: {
      albums,
      ep,
      singles,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
