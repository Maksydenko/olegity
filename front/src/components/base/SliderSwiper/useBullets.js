import { addBreakpointDesktop } from "./addBreakpointDesktop.util";

export const useBullets = (slidesPerView, slidesNumber, breakpoints) => {
  if (!breakpoints) {
    if (slidesPerView < slidesNumber) {
      return true;
    }
    return false;
  }

  const breakpointsArray = Object.entries(breakpoints).map(
    ([, { slidesPerView: slides, isBreakpoint }]) => ({
      isBreakpoint,
      slides,
    })
  );

  const breakpointsWithDesktop = addBreakpointDesktop(
    breakpointsArray,
    slidesPerView
  );

  const results = breakpointsWithDesktop.map((breakpoint) => {
    const { isBreakpoint, slides } = breakpoint;
    if (isBreakpoint && slides < slidesNumber) {
      return true;
    }
    return false;
  });

  const isBullets = results.includes(true);
  return isBullets;
};
