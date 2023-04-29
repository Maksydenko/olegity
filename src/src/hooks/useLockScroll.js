import { useState, useEffect } from "react";

export function useLockScroll() {
  const [isLockedScroll, setIsLockedScroll] = useState();

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
}
