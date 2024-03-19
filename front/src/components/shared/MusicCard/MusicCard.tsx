import { FC } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import Text from "./Text";
import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface MusicCardProps {
  className?: string;
  track: ISingle | IAlbum;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const MusicCard: FC<MusicCardProps> = ({
  className,
  track,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const { img } = track;

  const swiperParallaxDurationAttr = swiperParallaxDuration && {
    "data-swiper-parallax-duration": swiperParallaxDuration,
  };

  return (
    <div
      className={clsx(className, "music-card")}
      {...(swiperParallax && {
        "data-swiper-parallax": swiperParallax,
      })}
      {...swiperParallaxDurationAttr}
    >
      <Img className="music-card__img" img={img} />
      <Text
        track={track}
        swiperParallax={swiperParallax}
        {...swiperParallaxDurationAttr}
      />
    </div>
  );
};

export default MusicCard;
