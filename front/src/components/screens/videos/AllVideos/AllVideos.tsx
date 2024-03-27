"use client";

import { FC } from "react";
// import { useTranslation } from "next-i18next";

import Tabs from "@/components/base/Tabs/Tabs";
import Videos from "./Videos/Videos";

import { musicVideos } from "@/data/videos/musicVideos.data";
import { animatedVideos } from "@/data/videos/animatedVideos.data";

interface AllVideosProps {}

const AllVideos: FC<AllVideosProps> = () => {
  // const { t } = useTranslation();
  const tabs = [
    {
      id: "music-videos",
      title: "music-videos",
      content: <Videos className="all-videos__videos" videos={musicVideos} />,
    },
    {
      id: "animated-videos",
      title: "animated-videos",
      content: (
        <Videos className="all-videos__videos" videos={animatedVideos} />
      ),
    },
  ];

  return (
    <div className="all-videos">
      <div className="all-videos__container">
        <Tabs className="all-videos__tabs" tabs={tabs} />
      </div>
    </div>
  );
};

export default AllVideos;
