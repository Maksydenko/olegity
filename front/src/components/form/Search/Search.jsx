import { useState } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Search = ({ className, text, setText }) => {
  const [isFocus, setIsFocus] = useState();
  // const { t } = useTranslation();

  const handleFilterTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className={clsx(className, "search")}>
      <div
        className={clsx(
          "search__filter-text",
          isFocus && "search__filter-text_focus"
        )}
      >
        <span className="search__loupe _icon-loupe"></span>
        <input
          type="search"
          placeholder={"search"}
          className="search__input"
          value={text}
          onChange={handleFilterTextChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
      </div>
    </div>
  );
};

export default Search;
