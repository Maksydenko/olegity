// import { useTranslation } from "next-i18next";

function Text({
  track: { title, artist, genre, year },
  swiperParallax,
  swiperParallaxDurationAttr,
}) {
  // const { t } = useTranslation();

  return (
    <>
      <h4
        className="music-card__title"
        {...(swiperParallax && {
          "data-swiper-parallax": swiperParallax - 100,
        })}
        {...swiperParallaxDurationAttr}
      >
        {title}
      </h4>
      <span
        className="music-card__artist"
        {...(swiperParallax && {
          "data-swiper-parallax": swiperParallax - 200,
        })}
        {...swiperParallaxDurationAttr}
      >
        {artist}
      </span>
      <div
        className="music-card__additional-information"
        {...(swiperParallax && {
          "data-swiper-parallax": swiperParallax - 300,
        })}
        {...swiperParallaxDurationAttr}
      >
        <span className="music-card__genre">{`genres.${genre}`}</span>
        <span className="music-card__year">{year}</span>
      </div>
    </>
  );
}

export default Text;
