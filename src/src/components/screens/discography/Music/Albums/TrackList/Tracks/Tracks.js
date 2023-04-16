import Track from "./Track";

function Tracks(props) {
  const { trackList, swiperParallax, swiperParallaxDuration } = props;

  return trackList.map((track, index) => (
    <Track
      key={index}
      track={track}
      swiperParallax={swiperParallax - index * 100}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  ));
}

export default Tracks;
