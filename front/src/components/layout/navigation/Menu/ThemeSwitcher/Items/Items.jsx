import Item from "./Item";

const Items = ({ themes, currentTheme, onSwitchTheme }) => {
  return themes.map((theme) => {
    const { label } = theme;
    const isChecked = currentTheme === label;

    return (
      <Item
        key={label}
        theme={theme}
        isChecked={isChecked}
        onSwitchTheme={onSwitchTheme}
      />
    );
  });
};

export default Items;
