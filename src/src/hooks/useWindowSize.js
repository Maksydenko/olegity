import { useEffect } from "react";

export const useWindowSize = (handler, dependency) =>
  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [handler, dependency]);
