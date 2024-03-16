import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";

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
      <Items onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
