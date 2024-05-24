import { FC } from "react";
import clsx from "clsx";

import Transition from "@/components/base/Transition/Transition";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MenuList from "./MenuItems/MenuList";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { navLinks } from "@/data/navLinks.data";

interface MenuProps {
  className?: string;
  breakpoint: number;
  isScrollLock: boolean;
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({
  className,
  breakpoint,
  isScrollLock,
  onClick,
}) => {
  const isBreakpoint = useBreakpointCheck(breakpoint);

  return (
    <div className={clsx(className, "menu")}>
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
          <Transition appear={false} show={isBreakpoint ? isScrollLock : true}>
            <MenuList
              breakpoint={isBreakpoint}
              links={navLinks}
              onClick={onClick}
            />
          </Transition>
          <LanguageSwitcher className="menu__language-switcher" />
          <ThemeSwitcher className="menu__theme-switcher" />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
