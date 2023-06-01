import { useState, useEffect } from "react";

export const useLockScroll = () => {
  const [isLockedScroll, setIsLockedScroll] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isLockedScroll) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }

    return () => {
      body.classList.remove("lock");
    };
  }, [isLockedScroll]);

  return { isLockedScroll, setIsLockedScroll };
};
