import Items from "./Items/Items";
import LanguageChange from "./LanguageChange/LanguageChange";
import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

function Menu(props) {
  const { isActive, onMenuClick, onMenuClose } = props;

  function activeClass(className) {
    return `${className}${isActive ? " _active" : ""}`;
  }

  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={activeClass("menu__button")}
        onClick={onMenuClick}
      >
        <span></span>
      </button>
      <nav className={activeClass("menu__body")}>
        <ul className="menu__list">
          <Items links={links} onMenuClose={onMenuClose} />
        </ul>
        <LanguageChange onMenuClose={onMenuClose} />
      </nav>
      <ScrollTop />
    </div>
  );
}

export default Menu;
