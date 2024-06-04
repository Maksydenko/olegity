import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import { getTranslationValueByKey } from "@/components/shared/TextBlock/getTranslationValueByKey.util";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface AboutMainProps {
  className?: string;
}

const AboutMain: FC<AboutMainProps> = ({ className }) => {
  const { t } = useTranslation();

  const keyword = "about-main";

  const translatedTitle = t(getTranslationValueByKey(keyword, "title"));
  const translatedTexts: string[] = t(
    getTranslationValueByKey(keyword, "text"),
    {
      returnObjects: true,
    }
  );

  const link = {
    label: "more",
    value: "/about",
  };

  const object = (
    <Img
      className="about-main__img"
      src="/img/lsp/about-main.jpg"
      alt="Oleg LSP"
    />
  );

  return (
    <section className={clsx(className, "about-main")}>
      <ObjectOutsideContainer
        className="about-main__object-outside-container"
        object={object}
      >
        <TextBlock
          className="about-main__text-block"
          title={translatedTitle}
          texts={translatedTexts}
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default AboutMain;
