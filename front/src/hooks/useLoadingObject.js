import { useState, useEffect } from "react";

export const useLoadingObject = (objectRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: objectCurrent } = objectRef;
    const isComplete = (objectCurrent)?.complete;

    const isImg = objectCurrent;
    const isImgComplete = isImg && isComplete;

    if (isImgComplete) {
      handleLoadingComplete();
    } else {
      objectCurrent?.addEventListener("load", handleLoadingComplete);

      return () => {
        objectCurrent?.removeEventListener("load", handleLoadingComplete);
      };
    }
  }, [objectRef, isLoading]);

  return { isLoading };
};
