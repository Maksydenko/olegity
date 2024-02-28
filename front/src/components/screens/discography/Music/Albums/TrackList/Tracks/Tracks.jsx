import Track from "./Track";

const Tracks = ({ trackList, swiperParallax, swiperParallaxDuration }) => {
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
