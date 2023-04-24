import { Link } from "react-router-dom";

import { useScrollLock } from "@hooks/useScrollLock";
import { useWindowSize } from "@hooks/useWindowSize";

import Menu from "@layout/navigation/Menu/Menu";

import logo from "@img/logos/olegity.svg";

function Header() {
  const { isLockedScroll, setIsLockedScroll } = useScrollLock();
  const breakPoint = 991.98;

  function handleLockScroll() {
    setIsLockedScroll(!isLockedScroll);
  }

  function handleUnlockScroll() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= breakPoint && isLockedScroll) {
      handleLockScroll();
    }
  }

  useWindowSize(handleUnlockScroll, isLockedScroll);

  function handleClick() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= breakPoint) {
      handleLockScroll();
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleClick}>
          <img src={logo} alt="Olegity" />
        </Link>
        <Menu isLockedScroll={isLockedScroll} onClick={handleClick} />
      </div>
    </header>
  );
}

export default Header;
