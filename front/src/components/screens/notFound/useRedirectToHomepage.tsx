"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useRedirectToHomepage = (): number => {
  const [time, setTime] = useState(10);
  const { push } = useRouter();

  useEffect(() => {
    if (time <= 0) {
      push("/");
    } else {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time, push]);

  return time;
};
