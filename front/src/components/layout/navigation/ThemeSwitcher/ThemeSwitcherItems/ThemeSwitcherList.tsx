import { FC } from "react";

import ThemeSwitcherItem from "./ThemeSwitcherItem";

import { useThemeSwitch } from "../useThemeSwitch";

import { ILink } from "@/interfaces/link.interface";

interface ThemeSwitcherListProps {
  themes: ILink[];
  onClick?: () => void;
}

const ThemeSwitcherList: FC<ThemeSwitcherListProps> = ({ themes, onClick }) => {
  const { currentTheme, setCurrentTheme } = useThemeSwitch();

  const themeItems = themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <ThemeSwitcherItem
        key={label}
        theme={theme}
        onClick={onClick}
        checked={isChecked}
        setCurrentTheme={setCurrentTheme}
      />
    );
  });

  return themeItems;
};

export default ThemeSwitcherList;
