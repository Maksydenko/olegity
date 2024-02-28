import clsx from "clsx";

import Img from "@base/Img/Img";
import Text from "./Text";

const MusicCard = ({
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
        swiperParallaxDurationAttr={swiperParallaxDurationAttr}
      />
    </div>
  );
};

export default MusicCard;
