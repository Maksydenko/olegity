import { FC } from "react";
import clsx from "clsx";

import Tracks from "./Tracks/Tracks";

import { ITrack } from "@/interfaces/music.interface";

interface TrackListProps {
  className?: string;
  trackList: ITrack[];
  swiperParallax: number;
  swiperParallaxDuration: number;
}

const TrackList: FC<TrackListProps> = ({
  className,
  trackList,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <ol className={clsx(className, "track-list")}>
      <Tracks
        trackList={trackList}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </ol>
  );
};

export default TrackList;
