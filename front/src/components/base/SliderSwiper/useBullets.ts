import { SwiperOptions } from "swiper/types";
import { addBreakpointDesktop } from "./addBreakpointDesktop.util";
import { IBreakpoint, IBreakpoints } from "./breakpoints.interface";

interface IUseBullets {
  (
    slidesPerView: SwiperOptions["slidesPerView"],
    slidesNumber: number,
    breakpoints?: IBreakpoints
  ): boolean;
}

export const useBullets: IUseBullets = (
  slidesPerView = 1,
  slidesNumber,
  breakpoints
) => {
  if (!breakpoints) {
    if (+slidesPerView < slidesNumber) {
      return true;
    }
    return false;
  }

  const breakpointsArray: IBreakpoint[] = Object.entries(breakpoints).map(
    ([, { slidesPerView: slides, isBreakpoint }]) => {
      return {
        isBreakpoint,
        slides,
      };
    }
  );

  const breakpointsWithDesktop = addBreakpointDesktop(
    slidesPerView,
    breakpointsArray
  );

  const results = breakpointsWithDesktop.map((breakpoint) => {
    const { isBreakpoint, slides } = breakpoint;
    if (isBreakpoint && Number(slides) < slidesNumber) {
      return true;
    }
    return false;
  });

  const isBullets = results.includes(true);
  return isBullets;
};
