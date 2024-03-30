import { FC } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import Search from "@/components/form/Search/Search";
import VideoList from "./VideoItems/VideoList";

import { IVideo } from "@/interfaces/video.interface";

interface VideoProps {
  className?: string;
  videos: IVideo[];
}

const Video: FC<VideoProps> = ({ className, videos }) => {
  const query = useSearchParams();

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const querySearch = queryObject?.search;

  const currentSearchText = querySearch || "";

  return (
    <div className={clsx(className, "video")}>
      <div className="video__container">
        <Search className="video__search" />
        <VideoList videos={videos} searchText={currentSearchText} />
      </div>
    </div>
  );
};

export default Video;
