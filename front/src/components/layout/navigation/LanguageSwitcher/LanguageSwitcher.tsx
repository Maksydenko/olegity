import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";

import { languages } from "./languages.data";

interface LanguageSwitcherProps {
  className?: string;
  onClick?: () => void;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  className,
  onClick,
}) => {
  return (
    <ul className={clsx(className, "language-switcher")}>
      <Items languages={languages} onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
