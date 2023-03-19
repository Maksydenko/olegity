import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@layout/navigation/Menu/Menu";

import logo from "@img/logos/olegity.svg";

function Header() {
  const [isActive, setIsActive] = useState();

  function handleActiveChange() {
    setIsActive((prevState) => !prevState);
  }

  const body = document.body;
  function handleScrollLock() {
    if (isActive) {
      body.classList.remove("_lock");
    } else {
      body.classList.add("_lock");
    }
  }

  const documentElement = document.documentElement;
  function handleMenuClick() {
    handleActiveChange();
    if (documentElement.offsetWidth <= 991.98) {
      handleScrollLock();
    }
  }

  function handleMenuClose() {
    if (isActive) {
      handleActiveChange();
      handleScrollLock();
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={handleMenuClose}>
          <img src={logo} alt="Olegity" />
        </Link>
        <Menu
          isActive={isActive}
          onMenuClick={handleMenuClick}
          onMenuClose={handleMenuClose}
        />
      </div>
    </header>
  );
}

export default Header;
