import { Link } from "react-router-dom";

import { useScrollLock } from "@hooks/useScrollLock";
import { useWindowListener } from "@hooks/useWindowListener";

import Menu from "@layout/navigation/Menu/Menu";

import { breakpoints } from "@constants/breakpoint.const";

import logo from "@img/logos/olegity.svg";

const Header = () => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const breakpoint = breakpoints.tablet;

  const handleUnlockScroll = () => {
    if (isScrollLocked) {
      setIsScrollLocked(false);
    }
  };

  const handleUnlockScrollOnBreakpoint = () => {
    const windowWidth = window.innerWidth;
    const isMoreBreakpoint = windowWidth > breakpoint;

    if (isMoreBreakpoint && isScrollLocked) {
      handleUnlockScroll();
    }
  };
  useWindowListener(handleUnlockScrollOnBreakpoint);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    const isLessBreakpoint = windowWidth < breakpoint;

    if (isLessBreakpoint) {
      setIsScrollLocked(!isScrollLocked);
    }
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
