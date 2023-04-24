import { useEffect } from "react";

export function useWindowSize(handler, dependency) {
  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [handler, dependency]);
}
