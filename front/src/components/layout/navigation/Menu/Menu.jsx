import clsx from "clsx";

import Items from "./Items/Items";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import { useBreakpointCheck } from "@hooks/useBreakpointCheck";

import { links } from "@layout/navigation/links.const";

const Menu = ({ breakpoint, setIsScrollLock, onClick }) => {
  const isBreakpoint = useBreakpointCheck(breakpoint);

  return (
    <div className="header__menu menu">
      {isBreakpoint && (
        <button
          className={clsx(
            "menu__button",
            setIsScrollLock && "menu__button_active"
          )}
          type="button"
          aria-label={setIsScrollLock ? "Close" : "Open"}
          onClick={onClick}
        >
          <span></span>
        </button>
      )}
      <div
        className={clsx("menu__body", setIsScrollLock && "menu__body_active")}
      >
        <nav className="menu__content">
          <Items links={links} onClick={onClick} />
          <LanguageSwitcher onClick={onClick} />
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
