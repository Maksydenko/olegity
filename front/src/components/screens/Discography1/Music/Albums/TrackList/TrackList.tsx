import { FC } from "react";

import Tracks from "./Tracks/Tracks";
import clsx from "clsx";

interface TrackListProps {
  className?: string;
  trackList: string[];
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
