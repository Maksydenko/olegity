import { FC, KeyboardEvent } from "react";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";

import { ILink } from "@/interfaces/link.interface";

interface ThemeSwitcherItemProps {
  theme: ILink;
  checked: boolean;
  setCurrentTheme: (theme: string) => void;
  onClick?: () => void;
}

const ThemeSwitcherItem: FC<ThemeSwitcherItemProps> = ({
  theme: { icon, label },
  onClick,
  checked,
  setCurrentTheme,
}) => {
  const handleChange = () => {
    setCurrentTheme(label);

    if (onClick) {
      onClick();
    }
  };

  // Handle key down
  interface IHandleKeyDown {
    ({ key }: KeyboardEvent): void;
  }
  const handleKeyDown: IHandleKeyDown = ({ key }) => {
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
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={clsx(
          "theme-switcher__label",
          checked && "theme-switcher__label_checked"
        )}
        aria-label={`Set ${label} theme`}
        onKeyDown={handleKeyDown}
        {...(!checked && {
          tabIndex: 0,
        })}
      >
        <Img className="theme-switcher__img" img={img} svg loader={false} />
      </label>
    </>
  );
};

export default ThemeSwitcherItem;
