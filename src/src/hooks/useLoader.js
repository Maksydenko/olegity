import { useState, useEffect } from "react";

function useLoader(className, objectType = className) {
  const [isLoading, setIsLoading] = useState(true);

  function onObjectLoad() {
    setIsLoading(false);
  }

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
  }, [isLoading, onObjectLoad]);

  return isLoading;
}

export default useLoader;
