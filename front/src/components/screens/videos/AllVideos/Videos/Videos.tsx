import { FC, useState } from "react";

import Search from "@/components/form/Search/Search";
import Items from "./Items/Items";

import { IVideo } from "@/interfaces/video.interface";
import { useSearchParams } from "next/navigation";

interface VideosProps {
  videos: IVideo[];
}

const Videos: FC<VideosProps> = ({ videos }) => {
  const query = useSearchParams();

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const querySearch = queryObject?.search;

  const currentSearchText = querySearch || "";

  return (
    <div className="all-videos__videos videos">
      <div className="videos__container">
        <Search className="videos__search" />
        <Items videos={videos} searchText={currentSearchText} />
      </div>
    </div>
  );
};

export default Videos;
