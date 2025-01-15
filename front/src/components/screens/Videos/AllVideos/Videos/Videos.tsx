import { FC } from "react";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";
import VideosList from "./VideosItems/VideosList";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosProps {
  className?: string;
  videos: IMusicVideo[];
  showLoader?: boolean;
}

const Videos: FC<VideosProps> = ({ className, videos, showLoader }) => {
  return (
    <div className={clsx(className, "videos")}>
      <div className="videos__container">
        {showLoader ? <Loader /> : <VideosList videos={videos} />}
      </div>
    </div>
  );
};

export default Videos;
