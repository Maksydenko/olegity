import { useHideOnScroll } from "./useHideOnScroll";

const ScrollTop = () => {
  const isHidden = useHideOnScroll();
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const classHidden = (className) =>
    `${className}${isHidden ? ` _hidden` : ""}`;

  return (
    <span className={classHidden("menu__scroll-top")} onClick={handleClick}>
      <span className="menu__arrow-top _icon-arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
