import { FC, MutableRefObject, useEffect, useState } from "react";
import { SwiperRef } from "swiper/react";

interface NavProps {
  swiperRef: MutableRefObject<SwiperRef>;
}

const Nav: FC<NavProps> = ({ swiperRef }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  // Slide
  interface ISlide {
    (direction: "prev" | "next"): void;
  }
  const slide: ISlide = (direction) => {
    const swiperCurrent = swiperRef.current;
    const swiper = swiperCurrent?.swiper;

    if (direction) {
      swiper?.slidePrev();
    } else {
      swiper?.slideNext();
    }
  };

  useEffect(() => {
    const swiperCurrent = swiperRef.current;
    const swiper = swiperCurrent?.swiper;

    swiper?.on("slideChange", () => {
      const { isBeginning, isEnd } = swiper;

      setIsFirstSlide(isBeginning);
      setIsLastSlide(isEnd);
    });
  }, [swiperRef]);

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
