import { ChangeEvent, FC, FormEvent, useState } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { getNewQuery } from "@/utils/getNewQuery.util";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
  const [isFocus, setIsFocus] = useState(false);
  // const { t } = useTranslation();
  const { push } = useRouter();
  const query = useSearchParams();

  const queryArray = [...query];
  const queryObject = Object.fromEntries(queryArray);
  const querySearch = queryObject?.search;
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

    const newQuery = getNewQuery(queryObject, "search", searchText);
    push(newQuery);
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
          type="search"
          placeholder={"search"}
          className="search__input"
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
