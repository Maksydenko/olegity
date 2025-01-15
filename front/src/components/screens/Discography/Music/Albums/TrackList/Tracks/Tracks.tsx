import { FC } from "react";

import Track from "./Track";

import { ITrack } from "@/interfaces/music.interface";

interface TracksProps {
  trackList: ITrack[];
  swiperParallax: number;
  swiperParallaxDuration: number;
}

const Tracks: FC<TracksProps> = ({
  trackList,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const tracks = trackList.map(({ title, ID }, index) => {
    return (
      <Track
        key={ID}
        track={title}
        swiperParallax={swiperParallax - index * 100}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    );
  });

  return tracks;
};

export default Tracks;
