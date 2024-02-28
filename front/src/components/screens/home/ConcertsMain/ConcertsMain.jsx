import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import TextBlock from "@shared/TextBlock/TextBlock";

import olegLspWebp from "@img/lsp/webp/concerts-main.webp";
import olegLsp from "@img/lsp/jpg/concerts-main.jpg";

const ConcertsMain = () => {
  const link = {
    value: "more",
    path: "/concerts",
  };

  const img = [
    {
      src: olegLspWebp,
      type: "webp",
    },
    {
      src: olegLsp,
      alt: "Oleg LSP",
    },
  ];

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
