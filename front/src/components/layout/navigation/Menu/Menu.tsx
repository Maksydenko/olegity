import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { links } from "@/constants/links.const";

interface MenuProps {
  breakpoint: number;
  isScrollLock: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ breakpoint, isScrollLock, onClick }) => {
  const isBreakpoint = useBreakpointCheck(breakpoint);

  return (
    <div className="header__menu menu">
      {isBreakpoint && (
        <button
          className={clsx(
            "menu__button",
            isScrollLock && "menu__button_active"
          )}
          type="button"
          aria-label={isScrollLock ? "Close menu" : "Open menu"}
          onClick={onClick}
        >
          <span></span>
        </button>
      )}
      <div className={clsx("menu__body", isScrollLock && "menu__body_active")}>
        <nav className="menu__content">
          <Items links={links} breakpoint={isBreakpoint} onClick={onClick} />
          <LanguageSwitcher className="menu__language-switcher" />
          <ThemeSwitcher className="menu__theme-switcher" />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
