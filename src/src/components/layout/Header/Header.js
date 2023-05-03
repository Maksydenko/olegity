import { Link } from "react-router-dom";

import { useLockScroll } from "@hooks/useLockScroll";
import { useWindowSize } from "@hooks/useWindowSize";

import Menu from "@layout/navigation/Menu/Menu";

import logo from "@img/logos/olegity.svg";

const Header = () => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const breakpoint = 991.98;

  const handleUnlockScroll = () => isLockedScroll && setIsLockedScroll(false);

  const handleBreakpointUnlockScroll = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= breakpoint) {
      handleUnlockScroll();
    }
  };
  useWindowSize(handleBreakpointUnlockScroll, isLockedScroll);

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= breakpoint) {
      setIsLockedScroll(!isLockedScroll);
    }
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
