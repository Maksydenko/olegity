import { RefObject,useEffect, useState } from "react";

interface IUseLoadingObject {
  (objectRef: RefObject<any>): {
    isLoading: boolean;
  };
}

export const useLoadingObject: IUseLoadingObject = (objectRef) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const { current: objectCurrent } = objectRef;

    const isImg = objectCurrent instanceof HTMLImageElement;
    const isImgComplete = isImg && objectCurrent?.complete;

    if (isImgComplete) {
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
