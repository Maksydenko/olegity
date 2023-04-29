import Items from "./Items/Items";
import SwitchLanguage from "./SwitchLanguage/SwitchLanguage";
import ScrollTop from "./ScrollTop/ScrollTop";

import { classActive } from "@utils/classUtils";

import links from "@layout/navigation/links";

const Menu = ({ isLockedScroll, onClick }) => (
  <div className="header__menu menu">
    <button
      type="button"
      className={classActive("menu__button", isLockedScroll)}
      onClick={onClick}
    >
      <span></span>
    </button>
    <nav className={classActive("menu__body", isLockedScroll)}>
      <ul className="menu__list">
        <Items links={links} onClick={onClick} />
      </ul>
      <SwitchLanguage onClick={onClick} />
    </nav>
    <ScrollTop />
  </div>
);

export default Menu;
