import Items from "./Items/Items";
import SwitchLanguage from "./SwitchLanguage/SwitchLanguage";

import { handleClassName } from "@utils/className.util";

import { links } from "../links.const";

const Menu = ({ isScrollLocked, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={handleClassName(isScrollLocked, "menu__button")}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={handleClassName(isScrollLocked, "menu__body")}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
      <SwitchLanguage onClick={onClick} />
    </nav>
  </div>
);

export default Menu;
