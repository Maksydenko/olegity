"use client";

import { FC } from "react";
import clsx from "clsx";

import { useActiveOnScroll } from "@/hooks/useActiveOnScroll";

interface ScrollTopProps {
  className?: string;
}

const ScrollTop: FC<ScrollTopProps> = ({ className }) => {
  const { isActive } = useActiveOnScroll(110);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx(className, "scroll-top", isActive && "scroll-top_active")}
      type="button"
      aria-label="Scroll top"
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top _icon-arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
