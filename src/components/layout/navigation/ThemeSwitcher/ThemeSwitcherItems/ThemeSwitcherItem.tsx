import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { ILink } from "@/interfaces/link.interface";

interface ThemeSwitcherItemProps {
  theme: ILink;
  checked: boolean;
  setCurrentTheme: (theme: string) => void;
  onClick?: () => void;
}

const ThemeSwitcherItem: FC<ThemeSwitcherItemProps> = ({
  theme: { icon, label, value },
  onClick,
  checked,
  setCurrentTheme,
}) => {
  const handleChange = () => {
    setCurrentTheme(value);

    if (onClick) {
      onClick();
    }
  };

  const id = `theme-${value}`;

  return (
    <>
      <input
        id={id}
        className="theme-switcher__input"
        type="radio"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="theme-switcher__label"
        aria-label={`Set ${label} theme`}
      >
        <Img
          className="theme-switcher__img"
          src={icon}
          alt={label}
          svg
          loader={false}
        />
      </label>
    </>
  );
};

export default ThemeSwitcherItem;
