import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Btn from "@/components/shared/Btn/Btn";
import TextBlockList from "./TextBlockItems/TextBlockList";

import { getTranslationValueByKey } from "./getTranslationValueByKey.util";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface TextBlockProps {
  className?: string;
  title?: string;
  texts?: string[];
  link?: ILinkWithoutIcon;
}

const TextBlock: FC<TextBlockProps> = ({ className, title, texts, link }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(className, "text-block")}>
      {title && <h2 className="text-block__title">{title}</h2>}
      {!!texts?.length && (
        <div className="text-block__text">
          {texts.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
      )}
      {link && (
        <Btn className="text-block" path={link.value}>
          {t(link.label)}
        </Btn>
      )}
    </div>
  );
};

export default TextBlock;
