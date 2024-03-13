import clsx from "clsx";

import Items from "./Items/Items";

import { themes } from "./themes.const";

const ThemeSwitcher = ({ className, onClick }) => {
  return (
    <div className={clsx(className, "theme-switcher")}>
      <Items themes={themes} onClick={onClick} />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
