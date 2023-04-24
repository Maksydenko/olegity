import Items from "./Items/Items";
import SwitchLanguage from "./SwitchLanguage/SwitchLanguage";
import ScrollTop from "./ScrollTop/ScrollTop";

import links from "@layout/navigation/links";

const Menu = ({ isLockedScroll, onClick }) => {
  const activeClass = (className) =>
    `${className}${isLockedScroll ? " _active" : ""}`;

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
        <SwitchLanguage onClick={onClick} />
      </nav>
      <ScrollTop />
    </div>
  );
};

export default Menu;
