import { useState, useEffect } from "react";

export const useImgLoading = (imgRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: imgCurrent } = imgRef;
    const isComplete = imgCurrent?.complete;

    if (!isComplete) {
      return;
    }

    handleLoadingComplete();
  }, [imgRef, isLoading]);

  return { isLoading };
};
