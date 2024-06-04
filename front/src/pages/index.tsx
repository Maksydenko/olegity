import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home from "@/components/screens/Home/Home";

import useMusicStore from "@/stores/useMusic.store";
import useVideosStore from "@/stores/useVideos.store";

import { DiscographyService } from "@/services/discography.service";
import { VideosService } from "@/services/videos.service";

import { musicVideos } from "@/data/videos/musicVideos.data";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";
import { IAlbum } from "@/interfaces/music.interface";
import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface HomePageProps {
  albums: IAlbum[];
  musicVideos: IMusicVideo[];
}

const HomePage: NextPage<HomePageProps> = ({ albums, musicVideos }) => {
  const { setAlbums } = useMusicStore();
  const { setMusicVideos } = useVideosStore();

  useEffect(() => {
    setAlbums(albums);
    setMusicVideos(musicVideos);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return <Home />;
};

export default HomePage;

interface IHomeGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IHomeGetStaticProps) => {
  const albums = await DiscographyService.getAlbums();
  const musicVideos = await VideosService.getMusicVideos();

  return {
    props: {
      albums,
      musicVideos,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
