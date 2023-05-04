import { useHideOnScroll } from "./useHideOnScroll";

import { getModifierClassName } from "@utils/className.util";

const ScrollTop = () => {
  const isHidden = useHideOnScroll();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <span
      className={getModifierClassName(
        isHidden,
        "menu__scroll-top",
        "hidden",
        true
      )}
      onClick={handleClick}
    >
      <span className="menu__arrow-top _icon-arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
