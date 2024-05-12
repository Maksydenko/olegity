import { FC, MutableRefObject, useEffect, useState } from "react";
import { SwiperRef } from "swiper/react";
import { SwiperOptions } from "swiper/types";

interface NavProps {
  swiperRef: MutableRefObject<SwiperRef>;
  slidesLength: number;
  initialSlide: SwiperOptions["initialSlide"];
  loop: SwiperOptions["loop"];
}

const Nav: FC<NavProps> = ({ swiperRef, slidesLength, initialSlide, loop }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(!loop && initialSlide === 0);
  const [isLastSlide, setIsLastSlide] = useState(
    !loop && initialSlide === slidesLength - 1
  );

  // Slide
  interface ISlide {
    (direction: "prev" | "next"): void;
  }
  const slide: ISlide = (direction) => {
    const swiperCurrent = swiperRef.current;
    const swiper = swiperCurrent?.swiper;

    switch (direction) {
      case "prev":
        swiper?.slidePrev();
        break;
      case "next":
        swiper?.slideNext();
      default:
        break;
    }
  };

  useEffect(() => {
    if (loop) {
      return;
    }

    const swiperCurrent = swiperRef.current;
    const swiper = swiperCurrent?.swiper;

    swiper?.on("slideChange", () => {
      const { isBeginning, isEnd } = swiper;

      setIsFirstSlide(isBeginning);
      setIsLastSlide(isEnd);
    });
  }, [loop, swiperRef]);

  const arrow = <span className="slider-swiper__arrow _icon-arrow-top"></span>;

  return (
    <>
      <button
        className="slider-swiper__btn slider-swiper__btn_prev"
        type="button"
        aria-label="Previous slide"
        disabled={isFirstSlide}
        onClick={() => {
          slide("prev");
        }}
      >
        {arrow}
      </button>
      <button
        className="slider-swiper__btn slider-swiper__btn_next"
        type="button"
        aria-label="Next slide"
        disabled={isLastSlide}
        onClick={() => {
          slide("next");
        }}
      >
        {arrow}
      </button>
    </>
  );
};

export default Nav;
