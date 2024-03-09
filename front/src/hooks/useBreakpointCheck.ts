import { useCallback, useState } from "react";

import { useWindowListener } from "./useWindowListener";

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

export const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handleBreakpointCheck = useCallback(() => {
    const { innerWidth } = window;
    const isLessBreakpoint = innerWidth < breakpoint;

    setIsBreakpoint(isLessBreakpoint);
  }, [breakpoint]);
  useWindowListener("resize", handleBreakpointCheck);

  return isBreakpoint;
};
