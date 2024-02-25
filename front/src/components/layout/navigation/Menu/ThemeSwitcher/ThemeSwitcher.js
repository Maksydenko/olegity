import Items from "./Items/Items";

import { useThemeSwitch } from "./useThemeSwitch";

import { themes } from "./themes.const";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeSwitch();

  const handleSwitchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="menu__theme-switcher theme-switcher">
      <Items
        themes={themes}
        currentTheme={theme}
        onSwitchTheme={handleSwitchTheme}
      />
      <span className="theme-switcher__slider"></span>
    </div>
  );
};

export default ThemeSwitcher;
