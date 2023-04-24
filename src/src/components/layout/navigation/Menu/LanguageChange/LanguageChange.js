import { useTranslation } from "react-i18next";

function LanguageChange(props) {
  const { onClick } = props;
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    onClick();
  };

  return (
    <div className="menu menu__language-change">
      <span onClick={() => changeLanguage("en")}>EN</span>
      <span onClick={() => changeLanguage("ua")}>UA</span>
    </div>
  );
}

export default LanguageChange;
