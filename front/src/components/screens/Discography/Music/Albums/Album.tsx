import { FC } from "react";

import ListenOn from "@/components/shared/ListenOn/ListenOn";
import MusicCard from "@/components/shared/MusicCard/MusicCard";
import TrackList from "./TrackList/TrackList";

import { IAlbum } from "@/interfaces/music.interface";

interface AlbumProps {
  album: IAlbum;
}

const Album: FC<AlbumProps> = ({ album }) => {
  const { trackList, spotify, appleMusic, youtubeMusic, deezer } = album;

  return (
    <div className="albums__album">
      <MusicCard
        className="albums__music-card"
        music={album}
        swiperParallax={-300}
        swiperParallaxDuration={500}
      />
      <TrackList
        className="albums__track-list"
        trackList={trackList}
        swiperParallax={-700}
        swiperParallaxDuration={500}
      />
      <ListenOn
        className="albums__listen-on"
        links={{
          spotify,
          appleMusic,
          youtubeMusic,
          deezer,
        }}
        swiperParallax={-800}
        swiperParallaxDuration={500}
      />
    </div>
  );
};

export default Album;
