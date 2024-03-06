import { useCallback, useState } from "react";

import { useWindowListener } from "@hooks/useWindowListener";

export const useActiveOnScroll = (breakpoint) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveOnScroll = useCallback(() => {
    const { scrollY } = window;
    const isMoreBreakpoint = scrollY > breakpoint;

    if (isMoreBreakpoint) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [breakpoint]);
  useWindowListener("scroll", handleActiveOnScroll);

  return {
    isActive,
  };
};
