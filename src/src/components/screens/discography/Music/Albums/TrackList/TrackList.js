import Tracks from "./Tracks/Tracks";

const TrackList = ({ trackList, swiperParallax, swiperParallaxDuration }) => (
  <ol className="albums__track-list track-list">
    <Tracks
      trackList={trackList}
      swiperParallax={swiperParallax}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  </ol>
);

export default TrackList;
