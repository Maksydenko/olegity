import Tracks from "./Tracks/Tracks";

function TrackList(props) {
  const { trackList, swiperParallax, swiperParallaxDuration } = props;

  return (
    <ol className="albums__track-list track-list">
      <Tracks
        trackList={trackList}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </ol>
  );
}

export default TrackList;
