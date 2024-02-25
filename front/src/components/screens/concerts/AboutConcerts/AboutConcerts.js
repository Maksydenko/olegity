import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import TextBlock from "@shared/TextBlock/TextBlock";

import concertWebp from "@img/lsp/webp/concert.webp";
import concert from "@img/lsp/jpg/concert.jpg";

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
