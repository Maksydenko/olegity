import { SwiperOptions } from "swiper/types";
import { ICustomBreakpoint } from "./breakpoints.interface";

interface IAddBreakpointDesktop {
  (
    defaultSlidesPerView: SwiperOptions["slidesPerView"],
    breakpoints: ICustomBreakpoint[]
  ): ICustomBreakpoint[];
}

export const addBreakpointDesktop: IAddBreakpointDesktop = (
  defaultSlidesPerView,
  breakpoints
) => {
  const [firstBreakpoint] = breakpoints;
  const { slidesPerView: firstBreakpointSlidesPerView } = firstBreakpoint;

  const newObject = {
    isBreakpoint: true,
    slidesPerView: firstBreakpointSlidesPerView,
  };
  breakpoints.unshift(newObject);

  for (let i = 1; i < breakpoints.length; i++) {
    breakpoints[i].slidesPerView = breakpoints[i + 1]
      ? breakpoints[i + 1].slidesPerView
      : defaultSlidesPerView;
  }

  return breakpoints;
};
