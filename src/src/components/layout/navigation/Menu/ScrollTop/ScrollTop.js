import { useHideOnScroll } from "./useHideOnScroll";

const ScrollTop = () => {
  const isHidden = useHideOnScroll();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <span
      className={`menu__scroll-top${isHidden ? " _hidden" : ""}`}
      onClick={handleClick}
    >
      <span className="menu__arrow-top _icon-arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
