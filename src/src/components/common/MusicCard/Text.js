import { useTranslation } from "react-i18next";

function Text(props) {
  const { t } = useTranslation();

  const { track, swiperParallax, swiperParallaxDurationAttr } = props;

  const swiperParallaxAttrTitle = swiperParallax
    ? {
        "data-swiper-parallax": swiperParallax - 100,
      }
    : {};
  const swiperParallaxAttrArtist = swiperParallax
    ? {
        "data-swiper-parallax": swiperParallax - 200,
      }
    : {};
  const swiperParallaxAttrAdditionalInformation = swiperParallax
    ? {
        "data-swiper-parallax": swiperParallax - 300,
      }
    : {};

  return (
    <>
      <h5
        className="music-card__title"
        {...swiperParallaxAttrTitle}
        {...swiperParallaxDurationAttr}
      >
        {track.title}
      </h5>
      <span
        className="music-card__artist"
        {...swiperParallaxAttrArtist}
        {...swiperParallaxDurationAttr}
      >
        {track.artist}
      </span>
      <div
        className="music-card__additional-information"
        {...swiperParallaxAttrAdditionalInformation}
        {...swiperParallaxDurationAttr}
      >
        <span className="music-card__genre">{t(track.genre)}</span>
        <span className="music-card__year">{track.year}</span>
      </div>
    </>
  );
}

export default Text;
