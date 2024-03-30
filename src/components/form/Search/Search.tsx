import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { getSearchParam } from "@/utils/getSearchParam.util";
import { addSearchParam } from "@/utils/addSearchParam.util";

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
  const [isFocus, setIsFocus] = useState(false);
  const { push, asPath } = useRouter();
  const { t } = useTranslation("common");

  const querySearch = getSearchParam(asPath, "search");
  const currentSearch = querySearch || "";

  const [searchText, setSearchText] = useState(currentSearch);

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    e.preventDefault();

    const newPath = addSearchParam(asPath, "search", searchText);
    push(newPath);
  };

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className={clsx(className, "search")}>
      <form
        className={clsx(
          "search__filter-text",
          isFocus && "search__filter-text_focus"
        )}
        onSubmit={handleSubmit}
      >
        <button className="search__submit _icon-loupe" type="submit"></button>
        <input
          className="search__input"
          type="search"
          placeholder={t("search")}
          value={searchText}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
      </form>
    </div>
  );
};

export default Search;
