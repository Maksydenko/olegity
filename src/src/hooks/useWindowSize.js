import { useEffect } from "react";

export const useWindowSize = (handler) =>
  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [handler]);
