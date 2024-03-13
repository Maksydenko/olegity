import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useRedirectToHomepage = (): {
  time: number;
} => {
  const [time, setTime] = useState(10);
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        push("/");
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time, push]);

  return { time };
};
