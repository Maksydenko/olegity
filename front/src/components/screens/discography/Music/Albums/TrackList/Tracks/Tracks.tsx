import { FC } from "react";
import Track from "./Track";

import { IAlbum } from "@/interfaces/music.interface";

interface TracksProps {
  trackList: IAlbum["trackList"];
  swiperParallax: number;
  swiperParallaxDuration: number;
}

const Tracks: FC<TracksProps> = ({
  trackList,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return trackList.map((track, index) => {
    return (
      <Track
        key={track}
        track={track}
        swiperParallax={swiperParallax - index * 100}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    );
  });
};

export default Tracks;
