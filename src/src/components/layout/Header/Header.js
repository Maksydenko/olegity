import { Link } from "react-router-dom";

import { useLockScroll } from "@hooks/useLockScroll";
import { useWindowSize } from "@hooks/useWindowSize";

import Menu from "@layout/navigation/Menu/Menu";

import { breakpoints } from "@constants/breakpoint.const";

import logo from "@img/logos/olegity.svg";

const Header = () => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const breakpoint = breakpoints.tablet;

  const handleUnlockScroll = () => isLockedScroll && setIsLockedScroll(false);

  const handleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    windowWidth > breakpoint && isLockedScroll && handleUnlockScroll();
  };
  useWindowSize(handleBreakpointUnlockScroll);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    windowWidth < breakpoint && setIsLockedScroll(!isLockedScroll);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleUnlockScroll}>
          <img src={logo} alt="Olegity" />
        </Link>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
