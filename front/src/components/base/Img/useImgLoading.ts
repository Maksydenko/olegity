import { RefObject, useEffect, useState } from "react";

interface IUseImgLoading {
  (imgRef: RefObject<HTMLImageElement>): {
    isLoading: boolean;
  };
}

export const useImgLoading: IUseImgLoading = (imgRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: imgCurrent } = imgRef;

    const isImgComplete = imgCurrent?.complete;

    if (!isImgComplete) {
      return;
    }

    handleLoadingComplete();
  }, [imgRef, isLoading]);

  return { isLoading };
};
