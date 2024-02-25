import { useState, useEffect } from "react";

export const useLoadingObject = (objectRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: objectCurrent } = objectRef;
    const isComplete = objectCurrent?.complete;

    if (isComplete) {
      handleLoadingComplete();
    } else {
      const iframe = objectCurrent?.querySelector("iframe");
      let loadingObject = iframe || objectCurrent;

      loadingObject?.addEventListener("load", handleLoadingComplete);

      return () => {
        loadingObject?.removeEventListener("load", handleLoadingComplete);
      };
    }
  }, [objectRef, isLoading]);

  return { isLoading };
};
