import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@base/Img/Img";
import MainBlock from "@shared/MainBlock/MainBlock";

import olegLspWebp from "@img/lsp/webp/main-concert.webp";
import olegLsp from "@img/lsp/jpg/main-concert.jpg";

const MainConcerts = () => {
  const text = ["main-concerts"];

  const link = {
    path: "/concerts",
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

  const object = <Img className="main-concerts" img={img} resetStyle />;

  return (
    <ObjectOutsideContainer className="main-concerts" object={object}>
      <MainBlock
        className="main-concerts"
        title="concerts"
        text={text}
        link={link}
      />
    </ObjectOutsideContainer>
  );
};

export default MainConcerts;
