import { useEffect, useState } from "react";

const Nav = ({ swiperRef }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const slide = (next) => {
    const swiperCurrent = swiperRef.current;
    const swiper = swiperCurrent?.swiper;

    if (next) {
      swiper?.slideNext();
    } else {
      swiper?.slidePrev();
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
          slide(false);
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
          slide(true);
        }}
      >
        {arrow}
      </button>
    </>
  );
};

export default Nav;
