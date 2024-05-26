import { FC } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import MusicCardText from "./MusicCardText";

import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface MusicCardProps {
  className?: string;
  music: ISingle | IAlbum;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const MusicCard: FC<MusicCardProps> = ({
  className,
  music,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  const { title, img } = music;

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
      <Img className="music-card__img" src={img} alt={title} />
      <MusicCardText
        music={music}
        swiperParallax={swiperParallax}
        {...swiperParallaxDurationAttr}
      />
    </div>
  );
};

export default MusicCard;
