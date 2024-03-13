import clsx from "clsx";
import Items from "./Items/Items";

const LanguageSwitcher = ({ className, onClick }) => {
  return (
    <ul className={clsx(className, "language-switcher")}>
      <Items onClick={onClick} />
    </ul>
  );
};

export default LanguageSwitcher;
