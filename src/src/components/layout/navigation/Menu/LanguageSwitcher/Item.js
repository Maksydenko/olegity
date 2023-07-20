import { useTranslation } from "react-i18next";

const Item = ({ language: { value, href }, onClick }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(href);
    onClick();
  };

  return (
    <li className="language-switcher__item">
      <button className="language-switcher__btn" onClick={handleChangeLanguage}>
        {value}
      </button>
    </li>
  );
};

export default Item;
