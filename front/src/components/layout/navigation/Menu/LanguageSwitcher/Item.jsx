import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Item = ({ language: { value, path }, onClick }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const isCurrentLanguage = path === language;

  const setHTMLLang = useCallback(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("lang", path);
  }, [path]);

  const handleChangeLanguage = () => {
    i18n.changeLanguage(path);
    setHTMLLang();
    onClick();
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
        disabled={isCurrentLanguage}
        onClick={handleChangeLanguage}
      >
        {value}
      </button>
    </li>
  );
};

export default Item;
