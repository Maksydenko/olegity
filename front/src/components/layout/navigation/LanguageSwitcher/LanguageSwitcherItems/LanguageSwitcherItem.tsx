"use client";

import { FC, useCallback, useEffect } from "react";
import { useTranslation } from "next-i18next";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface LanguageSwitcherItemProps {
  language: ILinkWithoutIcon;
  onClick?: () => void;
}

const LanguageSwitcherItem: FC<LanguageSwitcherItemProps> = ({
  language: { label, value },
  onClick,
}) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const setHTMLLang = useCallback(() => {
    const htmlElement = document.querySelector("html");
    htmlElement?.setAttribute("lang", value);
  }, [value]);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(value);
    setHTMLLang();

    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (language !== "en") {
      setHTMLLang();
    }
  }, [language, setHTMLLang]);

  return (
    <li className="language-switcher__item">
      <button
        className="language-switcher__btn"
        type="button"
        disabled={value === language}
        onClick={handleChangeLanguage}
      >
        {label}
      </button>
    </li>
  );
};

export default LanguageSwitcherItem;
