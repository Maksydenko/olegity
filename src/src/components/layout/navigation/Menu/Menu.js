import Items from "./Items/Items";
import SwitchLanguage from "./SwitchLanguage/SwitchLanguage";
import ScrollTop from "./ScrollTop/ScrollTop";

import { getModifierClassName } from "@utils/className.util";

import links from "@layout/navigation/links";

const Menu = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={getModifierClassName(isLockedScroll, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={getModifierClassName(isLockedScroll, "menu__body")}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
      <SwitchLanguage onClick={onClick} />
    </nav>
    <ScrollTop />
  </div>
);

export default Menu;
