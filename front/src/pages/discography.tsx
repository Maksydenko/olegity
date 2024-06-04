import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Discography from "@/components/screens/Discography/Discography";

import useMusicStore from "@/stores/useMusic.store";

import { DiscographyService } from "@/services/discography.service";

import { IGetStaticProps, IQuery } from "@/interfaces/getStaticProps.interface";
import { IAlbum, ISingles } from "@/interfaces/music.interface";

interface DiscographyPageProps {
  albums: IAlbum[];
  ep: IAlbum[];
  singles: ISingles;
}

const DiscographyPage: NextPage<DiscographyPageProps> = ({
  albums,
  ep,
  singles,
}) => {
  const { setAlbums, setEP, setSingles } = useMusicStore();

  useEffect(
    () => {
      setAlbums(albums);
      setEP(ep);
      setSingles(singles);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  return <Discography />;
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
  const singles = await DiscographyService.getSingles(+queryPage);

  return {
    props: {
      albums,
      ep,
      singles,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
