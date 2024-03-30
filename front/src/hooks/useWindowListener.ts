import { useEffect } from "react";

interface IUseWindowListener {
  (event: string, handler: () => void): void;
}

export const useWindowListener: IUseWindowListener = (event, handler) =>
  useEffect(() => {
    handler();
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [handler, event]);
