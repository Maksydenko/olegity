import clsx from "clsx";

const Item = ({
  item: { link, icon },
  swiperParallax,
  swiperParallaxDuration,
}) => {
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
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        className={clsx("listen-on__link", `_icon-${icon}`)}
        href={link}
        target="_blank"
        rel="noreferrer"
      ></a>
    </li>
  );
};

export default Item;
