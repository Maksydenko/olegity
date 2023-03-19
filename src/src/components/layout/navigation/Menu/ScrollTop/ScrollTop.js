import { useState, useEffect } from "react";

function ScrollTop() {
  const [isHidden, setIsHidden] = useState(true);

  const scrollActive = 110;
  function handleScrollTop() {
    if (window.scrollY >= scrollActive) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [isHidden]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <span
      className={`menu__scroll-top${isHidden ? " _hidden" : ""}`}
      onClick={handleClick}
    >
      <span className="menu__arrow-top _icon-arrow-top"></span>
    </span>
  );
}

export default ScrollTop;
