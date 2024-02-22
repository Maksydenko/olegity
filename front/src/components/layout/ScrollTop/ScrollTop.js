import { useActiveOnScroll } from "./useActiveOnScroll";

import { handleClassName } from "@utils/className.util";

const ScrollTop = () => {
  const isActive = useActiveOnScroll(false);
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={handleClassName(isActive, "scroll-top")}
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top _icon-arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
