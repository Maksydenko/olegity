import clsx from "clsx";
import { FC } from "react";

interface ItemProps {
  item: {
    icon: string;
    link: string;
  };
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const Item: FC<ItemProps> = ({
  item: { icon, link },
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
      <a
        className={clsx("listen-on__link", `_icon-${icon}`)}
        href={link}
        aria-label={icon}
        target="_blank"
        rel="noreferrer"
      ></a>
    </li>
  );
};

export default Item;
