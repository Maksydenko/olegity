import { useTranslation } from "react-i18next";

import Tabs from "@base/Tabs/Tabs";
import Videos from "./Videos/Videos";

import { musicVideos } from "@constants/videos/musicVideos.const";
import { animatedVideos } from "@constants/videos/animatedVideos.const";

const AllVideos = () => {
  const { t } = useTranslation();
  const tabs = [
    {
      id: "music-videos",
      title: t("music-videos"),
      content: <Videos videos={musicVideos} />,
    },
    {
      id: "animated-videos",
      title: t("animated-videos"),
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
