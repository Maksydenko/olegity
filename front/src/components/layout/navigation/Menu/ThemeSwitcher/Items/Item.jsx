import clsx from "clsx";

import Img from "@base/Img/Img";

const Item = ({ theme: { icon, label }, isChecked, onSwitchTheme }) => {
  const handleChange = () => {
    onSwitchTheme(label);
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      handleChange();
    }
  };

  const id = `${label}-theme`;

  const img = {
    src: icon,
    alt: label,
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        className="theme-switcher__input"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={clsx(
          "theme-switcher__label",
          isChecked && "theme-switcher__label_checked"
        )}
        role="button"
        tabIndex={isChecked ? -1 : 0}
        onKeyDown={handleKeyDown}
      >
        <Img className="theme-switcher__img" img={img} svg loader={false} />
      </label>
    </>
  );
};

export default Item;
