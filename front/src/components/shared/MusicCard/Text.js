import { useTranslation } from "react-i18next";

function Text({
  track: { title, artist, genre, year },
  swiperParallax,
  swiperParallaxDurationAttr,
}) {
  const { t } = useTranslation();

  const swiperParallaxAttrTitle = swiperParallax && {
    "data-swiper-parallax": swiperParallax - 100,
  };
  const swiperParallaxAttrArtist = swiperParallax && {
    "data-swiper-parallax": swiperParallax - 200,
  };
  const swiperParallaxAttrAdditionalInformation = swiperParallax && {
    "data-swiper-parallax": swiperParallax - 300,
  };

  return (
    <>
      <h4
        className="music-card__title"
        {...swiperParallaxAttrTitle}
        {...swiperParallaxDurationAttr}
      >
        {title}
      </h4>
      <span
        className="music-card__artist"
        {...swiperParallaxAttrArtist}
        {...swiperParallaxDurationAttr}
      >
        {artist}
      </span>
      <div
        className="music-card__additional-information"
        {...swiperParallaxAttrAdditionalInformation}
        {...swiperParallaxDurationAttr}
      >
        <span className="music-card__genre">{t(genre)}</span>
        <span className="music-card__year">{year}</span>
      </div>
    </>
  );
}

export default Text;
