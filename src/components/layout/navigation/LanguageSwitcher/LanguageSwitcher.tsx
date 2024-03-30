import { FC } from "react";
import clsx from "clsx";

import LanguageSwitcherList from "./LanguageSwitcherItems/LanguageSwitcherList";

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
      <LanguageSwitcherList languages={languages} onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
