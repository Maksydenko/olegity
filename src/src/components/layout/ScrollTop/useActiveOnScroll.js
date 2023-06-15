import { useState, useEffect } from "react";

export const useActiveOnScroll = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollActive = 110;
  const handleScroll = () =>
    window.scrollY >= scrollActive ? setIsActive(true) : setIsActive(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return isActive;
};
