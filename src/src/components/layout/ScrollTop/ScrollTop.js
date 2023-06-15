import { useHideOnScroll } from "./useHideOnScroll";

import { handleClassName } from "@utils/className.util";

const ScrollTop = () => {
  const isHidden = useHideOnScroll();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={handleClassName(!isHidden, "scroll-top")}
      onClick={handleClick}
    >
      <span className="scroll-top__arrow-top _icon-arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
