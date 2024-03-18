"use client";

// import { useTranslation } from "next-i18next";

import Tabs from "@/components/base/Tabs/Tabs";
import Videos from "./Videos/Videos";

import { musicVideos } from "@/data/videos/musicVideos.data";
import { animatedVideos } from "@/data/videos/animatedVideos.data";

const AllVideos = () => {
  // const { t } = useTranslation();
  const tabs = [
    {
      id: "music-videos",
      title: "music-videos",
      content: <Videos videos={musicVideos} />,
    },
    {
      id: "animated-videos",
      title: "animated-videos",
      content: <Videos videos={animatedVideos} />,
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
