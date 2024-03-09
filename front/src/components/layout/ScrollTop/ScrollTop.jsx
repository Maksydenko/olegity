"use client";

import clsx from "clsx";

import { useActiveOnScroll } from "@/hooks/useActiveOnScroll";

const ScrollTop = () => {
  const { isActive } = useActiveOnScroll(110);

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
