import { useEffect } from "react";

export const useWindowListener = (handler, event = "resize") =>
  useEffect(() => {
    handler();
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [handler, event]);
