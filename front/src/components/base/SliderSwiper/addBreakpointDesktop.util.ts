import { SwiperOptions } from "swiper/types";
import { IBreakpoint } from "./breakpoints.interface";

interface IAddBreakpointDesktop {
  (
    slidesPerView: SwiperOptions["slidesPerView"],
    breakpoints: IBreakpoint[]
  ): IBreakpoint[];
}

export const addBreakpointDesktop: IAddBreakpointDesktop = (
  slidesPerView,
  breakpoints
) => {
  const firstBreakpoint = breakpoints[0];
  const newObject = {
    isBreakpoint: true,
    slides: firstBreakpoint.slides,
  };
  breakpoints.unshift(newObject);

  for (
    let i = 1;
    i < breakpoints.length;
    i++
  ) {
    breakpoints[i].slides = breakpoints[i + 1]
      ? breakpoints[i + 1].slides
      : slidesPerView;
  }

  return breakpoints;
};
