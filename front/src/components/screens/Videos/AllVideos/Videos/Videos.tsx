import { FC } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import Search from "@/components/form/Search/Search";
import VideosList from "./VideosItems/VideosList";

import { IVideo } from "@/interfaces/video.interface";

interface VideosProps {
  className?: string;
  videos: IVideo[];
}

const Videos: FC<VideosProps> = ({ className, videos }) => {
  const query = useSearchParams();

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const querySearch = queryObject?.search;

  const currentSearchText = querySearch || "";

  return (
    <div className={clsx(className, "videos")}>
      <div className="videos__container">
        <Search className="videos__search" />
        <VideosList videos={videos} searchText={currentSearchText} />
      </div>
    </div>
  );
};

export default Videos;
