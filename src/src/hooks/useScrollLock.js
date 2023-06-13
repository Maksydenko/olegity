import { useState, useEffect } from "react";

export const useScrollLock = () => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isScrollLocked) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }

    return () => {
      body.classList.remove("lock");
    };
  }, [isScrollLocked]);

  return { isScrollLocked, setIsScrollLocked };
};
