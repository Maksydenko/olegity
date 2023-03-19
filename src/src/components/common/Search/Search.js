import { useState } from "react";
import { useTranslation } from "react-i18next";

function Search(props) {
  const [isFocus, setIsFocus] = useState();

  function handleFilterTextChange(event) {
    onFilterTextChange(event.target.value);
  }

  function handleFilterTextClear() {
    onFilterTextChange("");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleFocusChange() {
    setIsFocus((prevState) => !prevState);
  }

  const { t } = useTranslation();

  const { className, filterText, onFilterTextChange } = props;

  return (
    <div className={`${className}__search search`}>
      <form action="#" onSubmit={handleSubmit}>
        <div className={`search__filter-text${isFocus ? " _focus" : ""}`}>
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
        </div>
      </form>
    </div>
  );
}

export default Search;
