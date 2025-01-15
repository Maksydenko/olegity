import { FC } from "react";
import { useRouter } from "next/router";

import { getTranslate } from "@/utils/getTranslate.util";

import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface MusicCardTextProps {
  music: IAlbum | ISingle;
  swiperParallax?: number;
  swiperParallaxDurationAttr?: {
    "data-swiper-parallax-duration": number;
  };
}

const MusicCardText: FC<MusicCardTextProps> = ({
  music: { title, artist, genre, year },
  swiperParallax,
  swiperParallaxDurationAttr,
}) => {
  const { locale } = useRouter();

  const currentTranslate = getTranslate(genre, locale);
  const genreTranslate = currentTranslate?.genre;

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
        <span className="music-card__genre">{genreTranslate}</span>
        <span className="music-card__year">{year}</span>
      </div>
    </>
  );
};

export default MusicCardText;
