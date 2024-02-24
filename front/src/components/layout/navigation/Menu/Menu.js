import clsx from "clsx";

import Items from "./Items/Items";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import { links } from "@layout/navigation/links.const";

const Menu = ({ isScrollLocked, onClick }) => {
  return (
    <div className="header__menu menu">
      <button
        className={clsx(
          "menu__button",
          isScrollLocked && "menu__button_active"
        )}
        type="button"
        onClick={onClick}
      >
        <span></span>
      </button>
      <nav
        className={clsx("menu__body", isScrollLocked && "menu__body_active")}
      >
        <Items links={links} onClick={onClick} />
        <LanguageSwitcher onClick={onClick} />
      </nav>
    </div>
  );
};

export default Menu;
