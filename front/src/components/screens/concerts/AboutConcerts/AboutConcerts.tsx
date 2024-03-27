import { FC } from "react";
import clsx from "clsx";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface AboutConcertsProps {
  className?: string;
}

const AboutConcerts: FC<AboutConcertsProps> = ({ className }) => {
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
          keyword="about-concerts"
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default AboutConcerts;
