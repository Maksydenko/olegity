import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import { getTranslationValueByKey } from "@/components/shared/TextBlock/getTranslationValueByKey.util";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface AboutConcertsProps {
  className?: string;
}

const AboutConcerts: FC<AboutConcertsProps> = ({ className }) => {
  const { t } = useTranslation();

  const keyword = "about-main";

  const translatedTitle = t(getTranslationValueByKey(keyword, "title"));
  const translatedTexts: string[] = t(
    getTranslationValueByKey(keyword, "text"),
    {
      returnObjects: true,
    }
  );

  const object = (
    <Img
      className="about-concerts__img"
      src="/img/lsp/concerts.jpg"
      alt="Oleg LSP"
    />
  );

  return (
    <section className={clsx(className, "about-concerts")}>
      <ObjectOutsideContainer
        className="about-concerts__object-outside-container"
        object={object}
      >
        <TextBlock
          className="about-concerts__text-block"
          title={translatedTitle}
          texts={translatedTexts}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default AboutConcerts;
