import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import MainBlock from "@shared/MainBlock/MainBlock";

import olegLspWebp from "@img/lsp/webp/main-about.webp";
import olegLsp from "@img/lsp/jpg/main-about.jpg";

const MainAbout = () => {
  const text = ["main-about"];

  const link = {
    path: "/about",
    value: "more",
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

  const object = <Img className="main-about" img={img} resetStyle />;

  return (
    <ObjectOutsideContainer className="main-about" object={object}>
      <MainBlock className="main-about" title="about" text={text} link={link} />
    </ObjectOutsideContainer>
  );
};

export default MainAbout;
