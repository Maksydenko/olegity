export const addBreakpointDesktop = (breakpoints, slidesPerView) => {
  const firstBreakpoint = breakpoints[0];
  const newObject = {
    isBreakpoint: true,
    slides: firstBreakpoint.slides,
  };
  breakpoints.unshift(newObject);

  for (let i = 1; i < breakpoints.length; i++) {
    const currentBreakpoint = breakpoints[i];
    const nextBreakpoint = breakpoints[i + 1];

    currentBreakpoint.slides = nextBreakpoint
      ? nextBreakpoint.slides
      : slidesPerView;
  }

  return breakpoints;
};
