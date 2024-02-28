import { useCallback, useState } from "react";

import { useWindowListener } from "./useWindowListener";

export const useBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handleBreakpointCheck = useCallback(() => {
    const { innerWidth } = window;
    const isLessBreakpoint = innerWidth < breakpoint;

    setIsBreakpoint(isLessBreakpoint);
  }, [breakpoint]);
  useWindowListener("resize", handleBreakpointCheck);

  return isBreakpoint;
};
