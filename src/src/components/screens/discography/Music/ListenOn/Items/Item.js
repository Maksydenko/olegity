function Item(props) {
  const { item, swiperParallax, swiperParallaxDuration } = props;

  const swiperParallaxAttr = swiperParallax && {
    "data-swiper-parallax": swiperParallax,
  };
  const swiperParallaxDurationAttr = swiperParallaxDuration && {
    "data-swiper-parallax-duration": swiperParallaxDuration,
  };

  return (
    <li
      className="listen-on__item"
      {...swiperParallaxAttr}
      {...swiperParallaxDurationAttr}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className={`listen-on__link _icon-${item.icon}`}
      ></a>
    </li>
  );
}

export default Item;
