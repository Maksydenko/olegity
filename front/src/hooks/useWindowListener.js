import { useEffect } from "react";

export const useWindowListener = (event, handler) =>
  useEffect(() => {
    handler();
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [handler, event]);
