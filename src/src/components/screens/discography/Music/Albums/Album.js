import MusicCard from "@shared/MusicCard/MusicCard";
import ListenOn from "../ListenOn/ListenOn";
import TrackList from "./TrackList/TrackList";

const Album = ({ album }) => {
  const { trackList, links } = album;

  return (
    <div className="albums__album">
      <MusicCard
        className="albums"
        track={album}
        swiperParallax="-300"
        swiperParallaxDuration="500"
      />
      <TrackList
        trackList={trackList}
        swiperParallax="-700"
        swiperParallaxDuration="500"
      />
      <ListenOn
        className="albums"
        links={links}
        swiperParallax="-800"
        swiperParallaxDuration="500"
      />
    </div>
  );
};

export default Album;
