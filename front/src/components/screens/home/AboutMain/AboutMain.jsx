import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

import olegLspWebp from "@/assets/img/lsp/webp/about-main.webp";
import olegLsp from "@/assets/img/lsp/jpg/about-main.jpg";

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
