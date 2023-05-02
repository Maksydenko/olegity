import ResponsiveObjectOut from "@base/ResponsiveObjectOut/ResponsiveObjectOut";
import Img from "@base/Img/Img";
import MainBlock from "@common/MainBlock/MainBlock";

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

  const object = <Img className="main-about" img={img} styles={false} />;

  return (
    <ResponsiveObjectOut className="main-about" object={object}>
      <MainBlock className="main-about" title="about" text={text} link={link} />
    </ResponsiveObjectOut>
  );
};

export default MainAbout;
