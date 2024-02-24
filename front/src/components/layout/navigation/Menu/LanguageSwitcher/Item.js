import { useTranslation } from "react-i18next";

const Item = ({ language: { value, path }, onClick }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const handleChangeLanguage = () => {
    i18n.changeLanguage(path);
    onClick();
  };

  return (
    <li className="language-switcher__item">
      <button
        className="language-switcher__btn"
        type="button"
        disabled={path === language}
        onClick={handleChangeLanguage}
      >
        {value}
      </button>
    </li>
  );
};

export default Item;
