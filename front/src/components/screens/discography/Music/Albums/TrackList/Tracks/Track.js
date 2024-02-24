const Track = ({ track, swiperParallax, swiperParallaxDuration }) => {
  return (
    <li
      className="track-list__track"
      {...(swiperParallax && {
        "data-swiper-parallax": swiperParallax,
      })}
      {...(swiperParallaxDuration && {
        "data-swiper-parallax-duration": swiperParallaxDuration,
      })}
    >
      {track}
    </li>
  );
};

export default Track;
