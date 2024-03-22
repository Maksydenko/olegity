import clsx from "clsx";

import ThemeSwitcherList from "./ThemeSwitcherItems/ThemeSwitcherList";

import { themes } from "./themes.data";
import { FC } from "react";

interface ThemeSwitcherProps {
  className?: string;
  onClick?: () => void;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, onClick }) => {
  return (
    <div className={clsx(className, "theme-switcher")}>
      <ThemeSwitcherList themes={themes} onClick={onClick} />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
