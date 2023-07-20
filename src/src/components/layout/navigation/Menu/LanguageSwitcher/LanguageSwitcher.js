import Item from "./Item";

import { languages } from "@constants/languages.const";

const LanguageSwitcher = ({ onClick }) => {
  const items = languages.map((language) => {
    const { value } = language;

    return <Item key={value} language={language} onClick={onClick} />;
  });

  return <ul className="menu__language-switcher language-switcher">{items}</ul>;
};

export default LanguageSwitcher;
