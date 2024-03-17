import { FC } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import Text from "./Text";

interface MusicCardProps {
  className?: string;
  track: {
    title: string;
    artist: string;
    genre: string;
    year: number;
    img: {
      src: string;
      alt: string;
    };
    links: {
      spotify: string;
      appleMusic: string;
      youtubeMusic: string;
      deezer: string;
    };
    trackList: string[];
  };
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
