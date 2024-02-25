import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import TextBlock from "@shared/TextBlock/TextBlock";

import olegLspWebp from "@img/lsp/webp/main-about.webp";
import olegLsp from "@img/lsp/jpg/main-about.jpg";

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

  const object = <Img className="main-about__img" img={img} />;

  return (
    <section className="main-about">
      <ObjectOutsideContainer
        className="main-about__object-outside-container"
        object={object}
      >
        <TextBlock
          className="main-about__text-block"
          keyword="about-main"
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default MainAbout;
