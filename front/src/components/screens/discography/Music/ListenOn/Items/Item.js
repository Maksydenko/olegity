import clsx from "clsx";

const Item = ({
  item: { link, icon },
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <li
      className="listen-on__item"
      {...(swiperParallax && {
        "data-swiper-parallax": swiperParallax,
      })}
      {...(swiperParallaxDuration && {
        "data-swiper-parallax-duration": swiperParallaxDuration,
      })}
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
