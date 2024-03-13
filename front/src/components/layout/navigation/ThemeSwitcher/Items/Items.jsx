import Item from "./Item";

import { useThemeSwitch } from "../useThemeSwitch";

const Items = ({ themes, onClick }) => {
  const { currentTheme, setCurrentTheme } = useThemeSwitch();

  return themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <Item
        key={label}
        theme={theme}
        onClick={onClick}
        isChecked={isChecked}
        setCurrentTheme={setCurrentTheme}
      />
    );
  });
};

export default Items;
