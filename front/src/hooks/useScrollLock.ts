import { useState, useEffect } from "react";

import { TypeSetState } from "@/types/setState.type";

interface IUseScrollLock {
  (inerts?: string[]): {
    isScrollLock: boolean;
    setIsScrollLock: TypeSetState<boolean>;
  };
}

export const useScrollLock: IUseScrollLock = (inerts = []) => {
  const [isScrollLock, setIsScrollLock] = useState(false);

  interface IHandleInerts {
    (elements: (Element | null)[]): void;
  }

  const setInerts: IHandleInerts = (elements) => {
    elements.forEach((element) => {
      element?.setAttribute("inert", "");
    });
  };

  const removeInerts: IHandleInerts = (elements) => {
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
