import { FC } from "react";

import VideoItem from "./VideoItem";

import { IVideo } from "@/interfaces/video.interface";

interface VideoListProps {
  videos: IVideo[];
  searchText: string;
}

const VideoList: FC<VideoListProps> = ({ videos, searchText }) => {
  const videoItems = videos.map((video) => {
    const { title } = video;

    const titleLowerCased = title.toLowerCase();
    const searchTextLowerCased = searchText.toLowerCase();

    if (!titleLowerCased.includes(searchTextLowerCased)) {
      return null;
    }
    return <VideoItem key={title} video={video} />;
  });

  return <div className="video__list">{videoItems}</div>;
};

export default VideoList;
