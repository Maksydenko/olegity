import { FC } from "react";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface ConcertsMainProps {}

const ConcertsMain: FC<ConcertsMainProps> = () => {
  const link = {
    label: "more",
    value: "/concerts",
  };

  const img = {
    src: "/img/lsp/concerts-main.jpg",
    alt: "Oleg LSP",
  };

  const object = <Img className="concerts-main__img" img={img} />;

  return (
    <section className="concerts-main">
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
