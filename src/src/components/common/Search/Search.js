import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getModifierClassName } from "@utils/className.util";

const Search = ({ className, text, setText }) => {
  const [isFocus, setIsFocus] = useState();
  const { t } = useTranslation();

  // Handle submit
  const handleSubmit = (e) => e.preventDefault();
  // Handle filter text change
  const handleFilterTextChange = ({ target: { value } }) => setText(value);
  // Handle filter text clear
  const handleFilterTextClear = () => setText("");
  // Handle focus change
  const handleFocusChange = () => setIsFocus((prevState) => !prevState);

  return (
    <div className={`${className}__search search`}>
      <form
        action="#"
        className={getModifierClassName(
          isFocus,
          "search__filter-text",
          "focus"
        )}
        onSubmit={handleSubmit}
      >
        <span className="search__loupe _icon-loupe"></span>
        <input
          type="text"
          placeholder={t("search")}
          className="search__input"
          value={text}
          onChange={handleFilterTextChange}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
        <button
          type="button"
          className="search__cross _icon-cross"
          onClick={handleFilterTextClear}
        ></button>
      </form>
    </div>
  );
};

export default Search;
