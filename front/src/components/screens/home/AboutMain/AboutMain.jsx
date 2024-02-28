import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import TextBlock from "@shared/TextBlock/TextBlock";

import olegLspWebp from "@img/lsp/webp/about-main.webp";
import olegLsp from "@img/lsp/jpg/about-main.jpg";

const MainAbout = () => {
  const link = {
    value: "more",
    path: "/about",
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

  const object = <Img className="about-main__img" img={img} />;

  return (
    <section className="about-main">
      <ObjectOutsideContainer
        className="about-main__object-outside-container"
        object={object}
      >
        <TextBlock
          className="about-main__text-block"
          keyword="about-main"
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default MainAbout;
