import { FC } from "react";
import Tracks from "./Tracks/Tracks";

interface TrackListProps {
  trackList: string[];
  swiperParallax: number;
  swiperParallaxDuration: number;
}

const TrackList: FC<TrackListProps> = ({
  trackList,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <ol className="albums__track-list track-list">
      <Tracks
        trackList={trackList}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </ol>
  );
};

export default TrackList;
