import { FC } from "react";

import LanguageSwitcherItem from "./LanguageSwitcherItem";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface LanguageSwitcherListProps {
  languages: ILinkWithoutIcon[];
  onClick?: () => void;
}

const LanguageSwitcherList: FC<LanguageSwitcherListProps> = ({
  languages,
  onClick,
}) => {
  const languageItems = languages.map((language) => {
    const { label } = language;

    return (
      <LanguageSwitcherItem key={label} language={language} onClick={onClick} />
    );
  });

  return languageItems;
};

export default LanguageSwitcherList;
