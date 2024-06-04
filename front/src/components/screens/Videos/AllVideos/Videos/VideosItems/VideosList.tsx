import { FC } from "react";

import VideosItem from "./VideosItem";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface VideosListProps {
  videos: IMusicVideo[];
}

const VideosList: FC<VideosListProps> = ({ videos }) => {
  const videoItems = videos.map((video) => {
    const { id } = video;

    return <VideosItem key={id} video={video} />;
  });

  return <div className="videos__list">{videoItems}</div>;
};

export default VideosList;
