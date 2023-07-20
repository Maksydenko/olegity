import Items from "./Items/Items";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import { handleClassName } from "@utils/className.util";

import { links } from "@layout/navigation/links.const";

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
      <LanguageSwitcher onClick={onClick} />
    </nav>
  </div>
);

export default Menu;
