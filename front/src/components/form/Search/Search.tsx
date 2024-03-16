import { ChangeEvent, FC, useState } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { TypeSetState } from "@/types/setState.type";

interface SearchProps {
  className?: string;
  text: string;
  setText: TypeSetState<string>;
}

const Search: FC<SearchProps> = ({ className, text, setText }) => {
  const [isFocus, setIsFocus] = useState(false);
  // const { t } = useTranslation();

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) => {
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
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
      </div>
    </div>
  );
};

export default Search;
