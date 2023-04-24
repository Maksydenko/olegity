import Track from "./Track";

const Tracks = ({ trackList, swiperParallax, swiperParallaxDuration }) =>
  trackList.map((track, index) => (
    <Track
      key={index}
      track={track}
      swiperParallax={swiperParallax - index * 100}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  ));

export default Tracks;
