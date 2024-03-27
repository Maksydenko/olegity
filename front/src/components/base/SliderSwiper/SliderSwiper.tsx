"use client";

import { FC, Key, ReactNode, useEffect, useRef } from "react";
import clsx from "clsx";

import Nav from "./Nav";

import { useBullets } from "./useBullets";

// import Swiper core and required modules
import {
  // Navigation,
  Pagination,
  // Scrollbar,
  HashNavigation,
  Keyboard,
  // Mousewheel,
  // FreeMode,
  // Autoplay,
  Parallax,
  Virtual,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
// import "swiper/scss/navigation";
import "swiper/scss/pagination";
import {
  AutoplayOptions,
  HashNavigationOptions,
  KeyboardOptions,
  MousewheelOptions,
  PaginationOptions,
  ScrollbarOptions,
  SwiperOptions,
} from "swiper/types";
import { IPropBreakpoints } from "./breakpoints.interface";
// import "swiper/scss/scrollbar";

interface ISlide {
  id: Key;
  slide: ReactNode;
}

export interface SliderSwiperProps extends SwiperOptions {
  className?: string;
  slides: ISlide[];
  paginationClickable?: PaginationOptions["clickable"];
  paginationDynamicBullets?: PaginationOptions["dynamicBullets"];
  paginationType?: PaginationOptions["type"];
  scrollbarDraggable?: ScrollbarOptions["draggable"];
  hash?: string | boolean;
  hashNavigationWatchState?: HashNavigationOptions["watchState"];
  keyboardEnabled?: KeyboardOptions["enabled"];
  keyboardOnlyInViewport?: KeyboardOptions["onlyInViewport"];
  keyboardPageUpDown?: KeyboardOptions["pageUpDown"];
  mousewheelSensitivity?: MousewheelOptions["sensitivity"];
  autoplayDelay?: AutoplayOptions["delay"];
  autoplayStopOnLastSlide?: AutoplayOptions["stopOnLastSlide"];
  autoplayDisableOnInteraction?: AutoplayOptions["disableOnInteraction"];
  breakpoints?: IPropBreakpoints;
}

const SliderSwiper: FC<SliderSwiperProps> = ({
  className,
  slides,

  // Navigation
  navigation = true,

  // Pagination
  pagination = true,
  // Clickable
  paginationClickable = true,
  // Dynamic bullets
  paginationDynamicBullets,
  // Types: bullets, fraction, progressbar
  paginationType = "bullets",

  // Scrollbar
  scrollbar,
  // The ability to drag scrollbar
  scrollbarDraggable = true,

  // Turning/disabling dragging on a PC
  simulateTouch = true,
  // Sweep sensitivity
  touchRatio = 1,
  // Sweep/dragging angle
  touchAngle = 45,
  // Grab cursor
  grabCursor = true,
  // Switching when clicking on a slide
  slideToClickedSlide,

  // Hash navigation
  hash,
  // Track the condition
  hashNavigationWatchState,

  // Keyboard management

  // Turn on/off
  keyboardEnabled = true,
  // Turn on/off only when the slider is within the viewport
  keyboardOnlyInViewport = true,
  // Turn on/off the control control of PageUp, PageDown
  keyboardPageUpDown = true,

  // Mouse wheel control
  mousewheel,
  // The sensitivity of mouse wheel
  mousewheelSensitivity = 1,

  // Auto height
  autoHeight = true,
  // Number of slides for showing
  slidesPerView = 1,
  // Disabling functionality if there are more slides than needed
  watchOverflow = true,
  // The indent between the slides
  spaceBetween = 30,
  // The number of flipped slides
  slidesPerGroup = 1,
  // Active slide in the center
  centeredSlides,
  // Starting slide
  initialSlide = 0,
  // Loop slider
  loop,
  // Free mode
  freeMode,

  // Autoplay
  autoplay,
  // Pause between slides
  autoplayDelay = 1000,
  // Stop on last slide
  autoplayStopOnLastSlide,
  // Disable after manual override
  autoplayDisableOnInteraction,

  // Speed
  speed = 300,
  // Slider horizontal/vertical
  direction = "horizontal",
  // Breakpoints (adaptive)
  breakpoints,
  // Update slider when slider items change
  observer = true,
  // Turn on/off parallax
  parallax,
  // Virtual slides
  virtual,
}) => {
  const { length: slidesLength } = slides;
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiperCurrent = swiperRef?.current;
    const swiper = swiperCurrent?.swiper;

    if (swiper) {
      swiperCurrent.querySelectorAll("*").forEach((element: any) => {
        element.setAttribute("tabIndex", "-1");
      });
    }
  }, []);

  useEffect(() => {
    const swiperCurrent = swiperRef?.current;
    const swiper = swiperCurrent?.swiper;
    const swiperAutoplay = swiper?.autoplay;

    if (swiperAutoplay) {
      if (autoplay) {
        swiperAutoplay.start();
      } else {
        swiperAutoplay.stop();
      }
    }
  }, [autoplay]);

  const isPaginationBullets = pagination && paginationType === "bullets";
  const isBullets = useBullets(
    slidesPerView,
    slidesLength,
    breakpoints,
    isPaginationBullets
  );

  const slideItems = slides.map(({ id, slide }, index) => {
    return (
      <SwiperSlide
        key={id}
        {...(hash && {
          "data-hash": `${typeof hash === "string" ? hash : ""}${id}`,
        })}
        {...(virtual && {
          virtualIndex: index,
        })}
      >
        {slide}
      </SwiperSlide>
    );
  });

  return (
    <div
      className={clsx(
        className,
        "slider-swiper",
        isBullets && "slider-swiper_bullets"
      )}
    >
      {navigation && <Nav swiperRef={swiperRef} />}
      <Swiper
        className="slider-swiper__swiper"
        ref={swiperRef}
        // Modules
        modules={[
          // Navigation,
          Pagination,
          // Scrollbar,
          HashNavigation,
          Keyboard,
          // Mousewheel,
          // FreeMode,
          // Autoplay,
          Parallax,
          Virtual,
        ]}
        // Arrows
        navigation={false}
        // Pagination
        {...(pagination && {
          pagination: {
            // Clickable
            clickable: paginationClickable,
            // Dynamic bullets
            dynamicBullets: paginationDynamicBullets,
            // Types: bullets, fraction, progressbar
            type: paginationType,
          },
        })}
        // Scrollbar
        {...(scrollbar && {
          scrollbar: {
            // The ability to drag scrollbar
            draggable: scrollbarDraggable,
          },
        })}
        // Turning/disabling dragging on a PC
        simulateTouch={simulateTouch}
        // Sweep sensitivity
        touchRatio={touchRatio}
        // Sweep/dragging angle
        touchAngle={touchAngle}
        // Grab cursor
        grabCursor={grabCursor}
        // Switching when clicking on a slide
        slideToClickedSlide={slideToClickedSlide}
        // Hash navigation
        {...(hash && {
          hashNavigation:
            // Track the condition
            {
              watchState: hashNavigationWatchState,
            },
        })}
        // Keyboard management
        {...(keyboardEnabled && {
          keyboard: {
            // Turn on/off
            enabled: keyboardEnabled,
            // Turn on/off only when the slider is within the viewport
            onlyInViewport: keyboardOnlyInViewport,
            // Turn on/off the control control of PageUp, PageDown
            pageUpDown: keyboardPageUpDown,
          },
        })}
        // Mouse wheel control
        {...(mousewheel && {
          mousewheel: {
            // The sensitivity of mouse wheel
            sensitivity: mousewheelSensitivity,
          },
        })}
        // Auto height
        autoHeight={autoHeight}
        // Number of slides for showing
        slidesPerView={slidesPerView}
        // Disabling functionality if there are more slides than needed
        watchOverflow={watchOverflow}
        // The indent between the slides
        spaceBetween={spaceBetween}
        // The number of flipped slides
        slidesPerGroup={slidesPerGroup}
        // Active slide in the center
        centeredSlides={centeredSlides}
        // Starting slide
        initialSlide={initialSlide}
        // Loop slider
        loop={loop}
        // Free mode
        freeMode={freeMode}
        // Autoplay
        {...(autoplay && {
          autoplay: {
            // Pause between slides
            delay: autoplayDelay,
            // Stop on last slide
            stopOnLastSlide: autoplayStopOnLastSlide,
            // Disable after manual override
            disableOnInteraction: autoplayDisableOnInteraction,
          },
        })}
        // Speed
        speed={speed}
        // Horizontal/vertical slider
        direction={direction}
        // Breakpoints (adaptive)
        breakpoints={breakpoints}
        // Update slider when slider items change
        observer={observer}
        // Turn on/off parallax
        parallax={parallax}
        // Virtual slides
        virtual={virtual}
      >
        {slideItems}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
