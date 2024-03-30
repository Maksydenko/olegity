import { FC } from "react";
import { useRouter } from "next/router";
import { i18n } from "next-i18next";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface LanguageSwitcherItemProps {
  language: ILinkWithoutIcon;
  onClick?: () => void;
}

const LanguageSwitcherItem: FC<LanguageSwitcherItemProps> = ({
  language: { label, value },
  onClick,
}) => {
  const { push, pathname, asPath } = useRouter();

  const currentLanguage = i18n?.language;

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
        disabled={value === currentLanguage}
        onClick={handleChangeLanguage}
      >
        {label}
      </button>
    </li>
  );
};

export default LanguageSwitcherItem;
