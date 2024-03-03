import { useState } from "react";
import clsx from "clsx";

import { useWindowListener } from "@hooks/useWindowListener";

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false);

  const SCROLL_ACTIVE = 110;

  const handleScroll = () => {
    const { scrollY } = window;

    if (scrollY >= SCROLL_ACTIVE) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useWindowListener("scroll", handleScroll);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx("scroll-top", isActive && "scroll-top_active")}
      type="button"
      aria-label="Scroll top"
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top _icon-arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
