import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import { getTranslationValueByKey } from "@/components/shared/TextBlock/getTranslationValueByKey.util";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface ConcertsMainProps {
  className?: string;
}

const ConcertsMain: FC<ConcertsMainProps> = ({ className }) => {
  const { t } = useTranslation();

  const keyword = "about-concerts";

  const translatedTitle = t(getTranslationValueByKey(keyword, "title"));
  const translatedTexts: string[] = t(
    getTranslationValueByKey(keyword, "text"),
    {
      returnObjects: true,
    }
  );

  const link = {
    label: "more",
    value: "/concerts",
  };

  const object = (
    <Img
      className="concerts-main__img"
      src="/img/lsp/concerts-main.jpg"
      alt="Oleg LSP"
    />
  );

  return (
    <section className={clsx(className, "concerts-main")}>
      <ObjectOutsideContainer
        className="concerts-main__object-outside-container"
        object={object}
      >
        <TextBlock
          className="concerts-main__text-block"
          title={translatedTitle}
          texts={translatedTexts}
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default ConcertsMain;
