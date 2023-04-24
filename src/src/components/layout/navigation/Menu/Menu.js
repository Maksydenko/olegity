import Items from "./Items/Items";
import LanguageChange from "./LanguageChange/LanguageChange";
import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

function Menu(props) {
  const { isLockedScroll, onClick } = props;

  function activeClass(className) {
    return `${className}${isLockedScroll ? " _active" : ""}`;
  }

  return (
    <div className="header__menu menu">
      <button
        type="button"
        className={activeClass("menu__button")}
        onClick={onClick}
      >
        <span></span>
      </button>
      <nav className={activeClass("menu__body")}>
        <ul className="menu__list">
          <Items links={links} onClick={onClick} />
        </ul>
        <LanguageChange onClick={onClick} />
      </nav>
      <ScrollTop />
    </div>
  );
}

export default Menu;
