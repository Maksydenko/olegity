import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";

import { ILinkWithoutLabel } from "@/interfaces/link.interface";

interface ItemProps {
  item: ILinkWithoutLabel;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const Item: FC<ItemProps> = ({
  item: { icon, value },
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
      <Link
        className={clsx("listen-on__link", `_icon-${icon}`)}
        href={value}
        aria-label={icon}
        target="_blank"
        rel="noreferrer"
      ></Link>
    </li>
  );
};

export default Item;
