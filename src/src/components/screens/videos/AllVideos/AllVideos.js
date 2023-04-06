import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@base/Tabs/Tabs";
import Videos from "./Videos/Videos";

import musicVideos from "@constants/videos/musicVideos";
import animatedVideos from "@constants/videos/animatedVideos";

function AllVideos() {
  const [filterText, setFilterText] = useState("");

  function handleFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  function handleFilterTextClear() {
    setFilterText("");
  }

  const { t } = useTranslation();
  const allVideos = [
    {
      id: 1,
      title: t("music-videos"),
      content: (
        <Videos
          videos={musicVideos}
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
      ),
    },
    {
      id: 2,
      title: t("animated-videos"),
      content: (
        <Videos
          videos={animatedVideos}
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
      ),
    },
  ];

  return (
    <div className="all-videos">
      <div className="all-videos__container">
        <Tabs
          className="all-videos"
          tabs={allVideos}
          onFilterTextClear={handleFilterTextClear}
        />
      </div>
    </div>
  );
}

export default AllVideos;
