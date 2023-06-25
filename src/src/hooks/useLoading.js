import { useState, useEffect } from "react";

export const useLoading = (object) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadObject = () => setIsLoading(false);

  useEffect(() => {
    const objectElement = object.current;
    const isVideo = objectElement instanceof HTMLVideoElement;

    if (objectElement.complete) {
      handleLoadObject();
    } else {
      objectElement.addEventListener("load", handleLoadObject);

      if (isVideo) {
        objectElement.addEventListener("loadeddata", handleLoadObject);
      }

      return () => {
        objectElement?.removeEventListener("load", handleLoadObject);

        if (isVideo) {
          objectElement?.removeEventListener("loadeddata", handleLoadObject);
        }
      };
    }
  }, [object, isLoading]);

  return isLoading;
};
