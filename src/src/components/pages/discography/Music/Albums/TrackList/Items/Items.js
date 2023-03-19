import Item from "./Item";

function Items(props) {
  const { trackList, swiperParallax, swiperParallaxDuration } = props;

  return trackList.map((track, index) => (
    <Item
      key={index}
      track={track}
      swiperParallax={swiperParallax - index * 100}
      swiperParallaxDuration={swiperParallaxDuration}
    />
  ));
}

export default Items;
