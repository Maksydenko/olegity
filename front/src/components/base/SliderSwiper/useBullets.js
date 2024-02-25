import { addBreakpointDesktop } from "./addBreakpointDesktop.util";

export const useBullets = (breakpoints, slidesPerView, slidesNumber) => {
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
    if (isBreakpoint && Number(slides) < slidesNumber) {
      return true;
    }
    return false;
  });

  return results.includes(true);
};
