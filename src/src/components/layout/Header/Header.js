import { Link } from "react-router-dom";

import { useScrollLock } from "@hooks/useScrollLock";
import { useWindowResize } from "@hooks/useWindowResize";

import Menu from "@layout/navigation/Menu/Menu";

import { breakpoints } from "@constants/breakpoint.const";

import logo from "@img/logos/olegity.svg";

const Header = () => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const breakpoint = breakpoints.tablet;

  const handleUnlockScroll = () => isScrollLocked && setIsScrollLocked(false);

  const handleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    const isMoreBreakpoint = windowWidth > breakpoint;
    isMoreBreakpoint && isScrollLocked && handleUnlockScroll();
  };
  useWindowResize(handleBreakpointUnlockScroll);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakpoint = windowWidth < breakpoint;
    isLessBreakpoint < breakpoint && setIsScrollLocked(!isScrollLocked);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleUnlockScroll}>
          <img src={logo} alt="Olegity" />
        </Link>
        <Menu isScrollLocked={isScrollLocked} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
