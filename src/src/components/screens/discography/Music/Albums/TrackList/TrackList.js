import Items from "./Items/Items";

function TrackList(props) {
  const { trackList, swiperParallax, swiperParallaxDuration } = props;

  return (
    <ol className="albums__track-list track-list">
      <Items
        trackList={trackList}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </ol>
  );
}

export default TrackList;
