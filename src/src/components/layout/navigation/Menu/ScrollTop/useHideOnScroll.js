import { useState, useEffect } from "react";

export const useHideOnScroll = () => {
  const [isHidden, setIsHidden] = useState(true);

  const scrollActive = 110;
  const handleScroll = () => {
    if (window.scrollY >= scrollActive) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return isHidden;
};
