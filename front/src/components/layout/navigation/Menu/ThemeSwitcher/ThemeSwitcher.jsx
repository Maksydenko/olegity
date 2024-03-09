import Items from "./Items/Items";

import { themes } from "./themes.const";

const ThemeSwitcher = ({ onClick }) => {
  return (
    <div className="menu__theme-switcher theme-switcher">
      <Items themes={themes} onClick={onClick} />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
