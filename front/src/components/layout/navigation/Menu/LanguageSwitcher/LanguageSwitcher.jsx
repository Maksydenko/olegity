import Items from "./Items/Items";

const LanguageSwitcher = ({ onClick }) => {
  return (
    <ul className="menu__language-switcher language-switcher">
      <Items onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
