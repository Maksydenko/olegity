import { SwiperOptions } from "swiper/types";

import { addBreakpointDesktop } from "./addBreakpointDesktop.util";

import { IPropBreakpoints } from "./breakpoints.interface";

interface IUseBullets {
  (
    defaultSlidesPerView: SwiperOptions["slidesPerView"],
    slidesLength: number,
    breakpoints?: IPropBreakpoints,
    paginationBullets?: boolean
  ): boolean;
}

export const useBullets: IUseBullets = (
  defaultSlidesPerView = 1,
  slidesLength,
  breakpoints,
  paginationBullets
) => {
  if (!paginationBullets) {
    return false;
  }

  if (!breakpoints) {
    if (+defaultSlidesPerView < slidesLength) {
      return true;
    }
    return false;
  }

  const customBreakpoints = Object.entries(breakpoints).map(
    ([, { slidesPerView, isBreakpoint }]) => {
      return {
        slidesPerView,
        isBreakpoint,
      };
    }
  );

  const breakpointsWithDesktop = addBreakpointDesktop(
    defaultSlidesPerView,
    customBreakpoints
  );

  const allBreakpoints = breakpointsWithDesktop.map((breakpoint) => {
    const { isBreakpoint, slidesPerView: slides } = breakpoint;

    if (isBreakpoint && Number(slides) < slidesLength) {
      return true;
    }
    return false;
  });

  const isBullets = allBreakpoints.includes(true);
  return isBullets;
};
