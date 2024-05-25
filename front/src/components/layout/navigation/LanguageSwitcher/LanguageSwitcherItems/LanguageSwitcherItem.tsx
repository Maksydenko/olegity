import { FC } from "react";
import { useRouter } from "next/router";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface LanguageSwitcherItemProps {
  language: ILinkWithoutIcon;
  onClick?: () => void;
}

const LanguageSwitcherItem: FC<LanguageSwitcherItemProps> = ({
  language: { label, value },
  onClick,
}) => {
  const { push, pathname, asPath, locale } = useRouter();

  const handleChangeLanguage = () => {
    push(pathname, asPath, {
      locale: value,
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <li className="language-switcher__item">
      <button
        className="language-switcher__btn"
        type="button"
        disabled={value === locale}
        onClick={handleChangeLanguage}
      >
        {label}
      </button>
    </li>
  );
};

export default LanguageSwitcherItem;
