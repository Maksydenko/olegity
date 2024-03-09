import clsx from "clsx";

import Img from "@/components/base/Img/Img";

const Item = ({
  theme: { icon, label },
  onClick,
  isChecked,
  setCurrentTheme,
}) => {
  const handleChange = () => {
    setCurrentTheme(label);

    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      handleChange();
    }
  };

  const id = `theme-${label}`;

  const img = {
    src: icon,
    alt: label,
  };

  return (
    <>
      <input
        id={id}
        className="theme-switcher__input"
        type="radio"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={clsx(
          "theme-switcher__label",
          isChecked && "theme-switcher__label_checked"
        )}
        aria-label={`Set ${label} theme`}
        onKeyDown={handleKeyDown}
        {...(!isChecked && {
          tabIndex: 0,
        })}
      >
        <Img className="theme-switcher__img" img={img} svg loader={false} />
      </label>
    </>
  );
};

export default Item;
