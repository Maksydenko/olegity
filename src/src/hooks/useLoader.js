import { useState, useEffect } from "react";

export function useLoader(className, objectType = className) {
  const [isLoading, setIsLoading] = useState(true);
  const onObjectLoad = () => setIsLoading(false);

  useEffect(() => {
    const object = document.querySelector(
      `[class*="__${className}"] ${objectType}`
    );

    if (object.complete) {
      onObjectLoad();
    } else {
      object.addEventListener("load", onObjectLoad);

      return () => {
        object.removeEventListener("load", onObjectLoad);
      };
    }
  }, [className, objectType, isLoading]);

  return isLoading;
}
