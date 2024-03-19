import { FC } from "react";

import MusicCard from "@/components/shared/MusicCard/MusicCard";
import ListenOn from "@/components/shared/ListenOn/ListenOn";
import TrackList from "./TrackList/TrackList";

import { IAlbum } from "@/interfaces/music.interface";

interface AlbumProps {
  album: IAlbum;
}

const Album: FC<AlbumProps> = ({ album }) => {
  const { trackList, links } = album;

  return (
    <div className="albums__album">
      <MusicCard
        className="albums__music-card"
        track={album}
        swiperParallax={-300}
        swiperParallaxDuration={500}
      />
      <TrackList
        trackList={trackList}
        swiperParallax={-700}
        swiperParallaxDuration={500}
      />
      <ListenOn
        className="albums__listen-on"
        links={links}
        swiperParallax={-800}
        swiperParallaxDuration={500}
      />
    </div>
  );
};

export default Album;
