import { FC } from "react";

import VideosItem from "./VideoItem";

import { IVideo } from "@/interfaces/video.interface";

interface VideosListProps {
  videos: IVideo[];
  searchText: string;
}

const VideosList: FC<VideosListProps> = ({ videos, searchText }) => {
  const videoItems = videos.map((video) => {
    const { title } = video;

    const titleLowerCased = title.toLowerCase();
    const searchTextLowerCased = searchText.toLowerCase();

    if (!titleLowerCased.includes(searchTextLowerCased)) {
      return null;
    }
    return <VideosItem key={title} video={video} />;
  });

  return <div className="videos__list">{videoItems}</div>;
};

export default VideosList;
