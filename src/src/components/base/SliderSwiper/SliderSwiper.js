// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  // HashNavigation,
  Keyboard,
  // Mousewheel,
  // FreeMode,
  // Autoplay,
  Parallax,
  Virtual,
} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/zoom";

function SliderSwiper(props) {
  const {
    className,
    children,
    // Navigation
    navigation,
    // Pagination
    pagination,
    // Clickable
    paginationClickable,
    // Dynamic bullets
    paginationDynamicBullets,
    // Types: bullets, fraction, progressbar
    paginationType,

    // Turning/disabling dragging on a PC
    simulateTouch,
    // Sweep sensitivity
    touchRatio,
    // Sweep/dragging angle
    touchAngle,
    // Grab cursor
    grabCursor,
    // Switching when clicking on a slide
    slideToClickedSlide,

    // Hash navigation
    hash,
    // Track the condition
    hashNavigationWatchState,

    // Keyboard management

    // Turn on/off
    keyboardEnabled,
    // Turn on/off only when the slider is within the viewport
    keyboardOnlyInViewport,
    // Turn on/off the control control of PageUp, PageDown
    keyboardPageUpDown,

    // Mouse wheel control
    mousewheel,
    // The sensitivity of mouse wheel
    mousewheelSensitivity,

    // Auto height
    autoHeight,
    // Number of slides for showing
    slidesPerView,
    // The indent between the slides
    spaceBetween,
    // The number of flipped slides
    slidesPerGroup,
    // Active slide in the center
    centeredSlides,
    // Starting slide
    initialSlide,
    // Loop slider
    loop,
    // Free mode
    freeMode,

    // Autoplay
    autoplay,
    // Pause between slides
    autoplayDelay,
    // Stop on last slide
    autoplayStopOnLastSlide,
    // Disable after manual override
    autoplayDisableOnInteraction,

    // Speed
    speed,
    // Horizontal/vertical slider
    direction,
    // Breakpoints (adaptive)
    breakpoints,
    // Update slider when slider items change
    observer,
    // Turn on/off parallax
    parallax,
    // Virtual slides
    virtual,
  } = props;

  const slides = children.map((slide, index) => (
    <SwiperSlide
      key={index}
      virtualIndex={index}
      data-hash={hash && `${hash}-${index}`}
    >
      {slide}
    </SwiperSlide>
  ));

  return (
    <Swiper
      className={`${className}__slider`}
      // Modules
      modules={[
        Navigation,
        Pagination,
        // HashNavigation,
        Keyboard,
        // Mousewheel,
        // FreeMode,
        // Autoplay,
        Parallax,
        Virtual,
      ]}
      // Arrows
      {...(navigation && { navigation })}
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
          { watchState: hashNavigationWatchState },
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
      {slides}
    </Swiper>
  );
}

SliderSwiper.defaultProps = {
  navigation: true,
  // Pagination
  pagination: true,
  // Clickable
  paginationClickable: true,
  // Dynamic bullets
  paginationDynamicBullets: false,
  // Types: bullets, fraction, progressbar
  paginationType: "",

  // Turning/disabling dragging on a PC
  simulateTouch: true,
  // Sweep sensitivity
  touchRatio: 1,
  // Sweep/dragging angle
  touchAngle: 45,
  // Grab cursor
  grabCursor: true,
  // Switching when clicking on a slide
  slideToClickedSlide: false,

  // Hash navigation

  // Track the condition
  hashNavigationWatchState: false,

  // Keyboard management

  // Turn on/off
  keyboardEnabled: true,
  // Turn on/off only when the slider is within the viewport
  keyboardOnlyInViewport: true,
  // Turn on/off the control control of PageUp, PageDown
  keyboardPageUpDown: false,

  // Mouse wheel control
  mousewheel: false,
  // The sensitivity of mouse wheel
  mousewheelSensitivity: 1,

  // Auto height
  autoHeight: true,
  // Number of slides for showing
  slidesPerView: 1,
  // The indent between the slides
  spaceBetween: 30,
  // The number of flipped slides
  slidesPerGroup: 1,
  // Active slide in the center
  centeredSlides: false,
  // Starting slide
  initialSlide: 0,
  // Loop slider
  loop: false,
  // Free mode
  freeMode: false,

  // Autoplay
  autoplay: false,
  // Pause between slides
  autoplayDelay: 1000,
  // Stop on last slide
  autoplayStopOnLastSlide: false,
  // Disable after manual override
  autoplayDisableOnInteraction: false,

  // Speed
  speed: 300,
  // horizontal/vertical slider
  direction: "horizontal",
  // Breakpoints (adaptive)
  breakpoints: {},
  // Update slider when slider items change
  observer: true,
  // Turn on/off parallax
  parallax: false,
  // Virtual slides
  virtual: false,
};

export default SliderSwiper;
