import ResponsiveObjectOut from "@base/ResponsiveObjectOut/ResponsiveObjectOut";
import Img from "@base/Img/Img";
import MainBlock from "@common/MainBlock/MainBlock";

import olegLspWebp from "@img/lsp/webp/main-concert.webp";
import olegLsp from "@img/lsp/jpg/main-concert.jpg";

function MainConcerts() {
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

  const object = <Img className="main-concerts" img={img} />;

  return (
    <ResponsiveObjectOut className="main-concerts" object={object}>
      <MainBlock
        className="main-concerts"
        title="concerts"
        text={text}
        link={link}
      />
    </ResponsiveObjectOut>
  );
}

export default MainConcerts;
