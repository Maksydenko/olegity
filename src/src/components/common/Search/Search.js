import { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = ({ className, filterText, onFilterTextChange }) => {
  const [isFocus, setIsFocus] = useState();

  const handleSubmit = (e) => e.preventDefault();

  const handleFilterTextChange = ({ target: { value } }) =>
    onFilterTextChange(value);

  const handleFilterTextClear = () => onFilterTextChange("");

  const handleFocusChange = () => setIsFocus((prevState) => !prevState);

  const { t } = useTranslation();

  return (
    <div className={`${className}__search search`}>
      <form
        action="#"
        className={`search__filter-text${isFocus ? " _focus" : ""}`}
        onSubmit={handleSubmit}
      >
        <span className="search__loupe _icon-loupe"></span>
        <input
          type="text"
          placeholder={t("search")}
          className="search__input"
          value={filterText}
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
