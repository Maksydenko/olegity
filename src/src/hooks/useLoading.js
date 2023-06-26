import { useState, useEffect } from "react";

export const useLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadObject = () => setIsLoading(false);

  useEffect(() => {
    const objectElement = object.current;
    const isImg = objectElement instanceof HTMLImageElement;

    if (isImg && objectElement.complete) {
      handleLoadObject();
    } else {
      objectElement?.addEventListener("load", handleLoadObject);

      return () => {
        objectElement?.removeEventListener("load", handleLoadObject);
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
