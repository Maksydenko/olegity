import { FC } from "react";
import { useTranslation } from "next-i18next";

interface TextBlockItemProps {
  children: string;
}

const TextBlockItem: FC<TextBlockItemProps> = ({ children }) => {
  const { t } = useTranslation("common");

  return <p>{t(children)}</p>;
};

export default TextBlockItem;
