import { useEffect } from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Videos from "@/components/screens/Videos/Videos";

import useVideosStore from "@/stores/useVideos.store";

import { VideosService } from "@/services/videos.service";

import { IGetStaticProps } from "@/interfaces/getStaticProps.interface";
import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosPageProps {
  musicVideos: IMusicVideo[];
  animatedVideos: IMusicVideo[];
}

const VideosPage: NextPage<VideosPageProps> = ({
  musicVideos,
  animatedVideos,
}) => {
  const { setMusicVideos, setAnimatedVideos } = useVideosStore();

  useEffect(
    () => {
      setMusicVideos(musicVideos);
      setAnimatedVideos(animatedVideos);
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  return <Videos />;
};

export default VideosPage;

interface IVideosGetStaticProps extends IGetStaticProps {}

export const getStaticProps = async ({ locale }: IVideosGetStaticProps) => {
  const musicVideos = await VideosService.getMusicVideos();
  const animatedVideos = await VideosService.getAnimatedVideos();

  return {
    props: {
      musicVideos,
      animatedVideos,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
