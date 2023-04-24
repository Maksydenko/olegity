import { useEffect } from "react";

export function useWindowSize(func, dependency) {
  useEffect(() => {
    window.addEventListener("resize", func);

    return () => {
      window.removeEventListener("resize", func);
    };
  }, [dependency]);
}
