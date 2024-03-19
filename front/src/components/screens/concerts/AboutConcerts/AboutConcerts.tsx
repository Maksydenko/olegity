import { FC } from "react";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface AboutConcertsProps {}

const AboutConcerts: FC<AboutConcertsProps> = () => {
  const img = {
    src: "/img/lsp/concerts.jpg",
    alt: "Oleg LSP",
  };

  const object = <Img className="about-concerts__img" img={img} />;

  return (
    <section className="about-concerts">
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
