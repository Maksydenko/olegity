import Img from "@base/Img/Img";
import Text from "./Text";

const MusicCard = ({
  className,
  track,
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
    <div
      className={`${className}__music-card music-card`}
      {...swiperParallaxAttr}
      {...swiperParallaxDurationAttr}
    >
      <Img className="music-card" picture={track.picture} img={track.img} />
      <Text
        track={track}
        swiperParallax={swiperParallax}
        swiperParallaxDurationAttr={swiperParallaxDurationAttr}
      />
    </div>
  );
};

export default MusicCard;
