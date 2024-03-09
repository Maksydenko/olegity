import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

import concertWebp from "@/assets/img/lsp/webp/concerts.webp";
import concert from "@/assets/img/lsp/jpg/concerts.jpg";

const AboutConcerts = () => {
  const img = [
    {
      src: concertWebp,
      type: "webp",
    },
    {
      src: concert,
      alt: "Oleg LSP",
    },
  ];

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
