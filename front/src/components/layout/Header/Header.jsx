import { Link } from "react-router-dom";

import Img from "@base/Img/Img";
import Menu from "@layout/navigation/Menu/Menu";

import { useScrollLock } from "@hooks/useScrollLock";
import { useWindowListener } from "@hooks/useWindowListener";

import { breakpoints } from "@constants/breakpoints.const";

import logo from "@img/logos/olegity.svg";

const Header = () => {
  const { isScrollLock, setIsScrollLock } = useScrollLock(["main", "footer"]);
  const breakpoint = breakpoints.desktop;

  const handleUnlockScroll = () => {
    if (isScrollLock) {
      setIsScrollLock(false);
    }
  };

  const handleUnlockScrollOnBreakpoint = () => {
    const { innerWidth } = window;
    const isMoreBreakpoint = innerWidth > breakpoint;

    if (isMoreBreakpoint && isScrollLock) {
      handleUnlockScroll();
    }
  };
  useWindowListener("resize", handleUnlockScrollOnBreakpoint);

  const handleClick = () => {
    const { innerWidth } = window;
    const isLessBreakpoint = innerWidth < breakpoint;

    if (isLessBreakpoint) {
      setIsScrollLock(!isScrollLock);
    }
  };

  const img = {
    src: logo,
    alt: "Olegity",
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__img" onClick={handleUnlockScroll}>
          <Img img={img} svg />
        </Link>
        <Menu
          breakpoint={breakpoint}
          setIsScrollLock={isScrollLock}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
