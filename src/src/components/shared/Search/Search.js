import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getModifierClassName } from "@utils/className.util";

const Search = ({ className, text, setText }) => {
  const [isFocus, setIsFocus] = useState();
  const { t } = useTranslation();

  // Handle filter text change
  const handleFilterTextChange = ({ target: { value } }) => setText(value);
  // Handle focus change
  const handleFocusChange = () => setIsFocus((prevState) => !prevState);

  return (
    <div className={`${className}__search search`}>
      <div
        className={getModifierClassName(
          isFocus,
          "search__filter-text",
          "focus"
        )}
      >
        <span className="search__loupe _icon-loupe"></span>
        <input
          type="search"
          placeholder={t("search")}
          className="search__input"
          value={text}
          onChange={handleFilterTextChange}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
      </div>
    </div>
  );
};

export default Search;
