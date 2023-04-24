import { useTranslation } from "react-i18next";

const Switch = ({ language, onClick }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    onClick();
  };

  return <span onClick={() => changeLanguage(language)}>{language}</span>;
};

export default Switch;
