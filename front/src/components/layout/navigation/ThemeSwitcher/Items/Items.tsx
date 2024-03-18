import { FC } from "react";

import Item from "./Item";

import { useThemeSwitch } from "../useThemeSwitch";

import { ILink } from "@/interfaces/link.interface";

interface ItemsProps {
  themes: ILink[];
  onClick?: () => void;
}

const Items: FC<ItemsProps> = ({ themes, onClick }) => {
  const { currentTheme, setCurrentTheme } = useThemeSwitch();

  return themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <Item
        key={label}
        theme={theme}
        onClick={onClick}
        checked={isChecked}
        setCurrentTheme={setCurrentTheme}
      />
    );
  });
};

export default Items;
