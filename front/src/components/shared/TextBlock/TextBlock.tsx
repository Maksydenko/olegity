import { FC } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Btn from "@/components/form/Btn/Btn";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface TextBlockProps {
  className?: string;
  keyword: string;
  link?: ILinkWithoutIcon;
}

const TextBlock: FC<TextBlockProps> = ({ className, keyword, link }) => {
  // const { t } = useTranslation();

  // Get translation
  interface IGetTranslation {
    (key: string): string;
  }
  const getTranslation: IGetTranslation = (key) => {
    return `${keyword}.${key}`;
  };

  // const translationTitle = t(getTranslation("title"));
  // const translationText = t(getTranslation("text"), {
  //   returnObjects: true,
  // });

  // const textItems = translationText.map((textItem) => {
  //   return <p key={textItem}>{t(textItem)}</p>;
  // });

  return (
    <div className={clsx(className, "text-block")}>
      <h2 className="text-block__title">{"title"}</h2>
      <div className="text-block__text">{"text"}</div>
      {link && (
        <Btn className="text-block" path={link.value}>
          {"(link.label)"}
        </Btn>
      )}
    </div>
  );
};

export default TextBlock;
