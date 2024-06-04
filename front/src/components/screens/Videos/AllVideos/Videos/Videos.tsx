import { FC } from "react";
import clsx from "clsx";

import Search from "@/components/form/Search/Search";
import VideosList from "./VideosItems/VideosList";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosProps {
  className?: string;
  videos: IMusicVideo[];
}

const Videos: FC<VideosProps> = ({ className, videos }) => {
  return (
    <div className={clsx(className, "videos")}>
      <div className="videos__container">
        <VideosList videos={videos} />
      </div>
    </div>
  );
};

export default Videos;
