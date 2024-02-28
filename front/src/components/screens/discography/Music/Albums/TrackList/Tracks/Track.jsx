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
      <h5>{track}</h5>
    </li>
  );
};

export default Track;
