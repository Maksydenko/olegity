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
      <Items links={links} onClick={onClick} />
      <SwitchLanguage onClick={onClick} />
    </nav>
  </div>
);

export default Menu;
