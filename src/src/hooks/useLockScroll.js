import { useState, useEffect } from "react";

export function useLockScroll() {
  const [isLockedScroll, setIsLockedScroll] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isLockedScroll) {
      body.classList.add("_lock");
    } else {
      body.classList.remove("_lock");
    }

    return () => {
      body.classList.remove("_lock");
    };
  }, [isLockedScroll]);

  return { isLockedScroll, setIsLockedScroll };
}
