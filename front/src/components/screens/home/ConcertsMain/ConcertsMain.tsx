import { FC } from "react";
import clsx from "clsx";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface ConcertsMainProps {
  className?: string;
}

const ConcertsMain: FC<ConcertsMainProps> = ({ className }) => {
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
          keyword="about-concerts"
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default ConcertsMain;
