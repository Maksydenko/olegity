import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import MainBlock from "@shared/MainBlock/MainBlock";

import concertWebp from "@img/lsp/webp/concert.webp";
import concert from "@img/lsp/jpg/concert.jpg";

const AboutConcerts = () => {
  const text = ["about-concerts-1", "about-concerts-2"];

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
        <MainBlock
          className="about-concerts__main-block"
          title="about-concerts"
          text={text}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default AboutConcerts;
