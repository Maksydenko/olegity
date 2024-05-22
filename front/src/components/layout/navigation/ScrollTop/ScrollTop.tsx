import { FC } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";

import Transition from "@/components/base/Transition/Transition";

import { useActiveOnScroll } from "@/hooks/useActiveOnScroll";

interface ScrollTopProps {
  className?: string;
}

const ScrollTop: FC<ScrollTopProps> = ({ className }) => {
  const { isActive } = useActiveOnScroll(110);

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, {});

  const handleClick = () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: 0,
      },
    });
  };

  return (
    <Transition show={isActive}>
      <button
        className={clsx(className, "scroll-top")}
        type="button"
        aria-label="Scroll top"
        onClick={handleClick}
      >
        <span className="scroll-top__arrow-top _icon-arrow-top"></span>
      </button>
    </Transition>
  );
};

export default ScrollTop;
