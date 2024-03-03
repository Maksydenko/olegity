import { useState, useEffect } from "react";

export const useScrollLock = (inerts = []) => {
  const [isScrollLock, setIsScrollLock] = useState(false);

  const setInerts = (elements) => {
    elements.forEach((element) => {
      element?.setAttribute("inert", "");
    });
  };

  const removeInerts = (elements) => {
    elements.forEach((element) => {
      element?.removeAttribute("inert");
    });
  };

  useEffect(() => {
    const { body } = document;

    const inertElements = inerts.map((inert) => {
      return document.querySelector(inert);
    });

    if (isScrollLock) {
      body.classList.add("lock");
      setInerts(inertElements);
    } else {
      body.classList.remove("lock");
      removeInerts(inertElements);
    }

    return () => {
      body.classList.remove("lock");
      removeInerts(inertElements);
    };
  }, [inerts, isScrollLock]);

  return {
    isScrollLock,
    setIsScrollLock,
  };
};
