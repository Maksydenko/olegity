const Track = ({ track, swiperParallax, swiperParallaxDuration }) => {
  const swiperParallaxAttr = swiperParallax && {
    "data-swiper-parallax": swiperParallax,
  };
  const swiperParallaxDurationAttr = swiperParallaxDuration && {
    "data-swiper-parallax-duration": swiperParallaxDuration,
  };

  return (
    <li
      className="track-list__track"
      {...swiperParallaxAttr}
      {...swiperParallaxDurationAttr}
    >
      {track}
    </li>
  );
};

export default Track;
