import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

const MainAbout = () => {
  const link = {
    value: "more",
    path: "/about",
  };

  const img = {
    src: "/img/lsp/about-main.jpg",
    alt: "Oleg LSP",
  };

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
