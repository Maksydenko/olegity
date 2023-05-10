import { useHideOnScroll } from "./useHideOnScroll";

import { getModifierClassName } from "@utils/className.util";

const ScrollTop = () => {
  const isHidden = useHideOnScroll();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={getModifierClassName(isHidden, "scroll-top", "hidden", true)}
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top _icon-arrow-top"></span>
    </div>
  );
};

export default ScrollTop;
