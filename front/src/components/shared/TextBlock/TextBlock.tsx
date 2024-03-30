import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Btn from "@/components/shared/Btn/Btn";
import TextBlockList from "./TextBlockItems/TextBlockList";

import { getTranslationValueByKey } from "./getTranslationValueByKey.util";

import { ILinkWithoutIcon } from "@/interfaces/link.interface";

interface TextBlockProps {
  className?: string;
  keyword: string;
  link?: ILinkWithoutIcon;
}

const TextBlock: FC<TextBlockProps> = ({ className, keyword, link }) => {
  const { t } = useTranslation();

  const translatedTitle = t(getTranslationValueByKey(keyword, "title"));
  const translatedTexts: string[] = t(
    getTranslationValueByKey(keyword, "text"),
    {
      returnObjects: true,
    }
  );

  return (
    <div className={clsx(className, "text-block")}>
      <h2 className="text-block__title">{translatedTitle}</h2>
      <TextBlockList texts={translatedTexts} />
      {link && (
        <Btn className="text-block" path={link.value}>
          {t(link.label)}
        </Btn>
      )}
    </div>
  );
};

export default TextBlock;
