import ResponsiveObjectOut from "@base/ResponsiveObjectOut/ResponsiveObjectOut";
import Img from "@base/Img/Img";
import MainBlock from "@common/MainBlock/MainBlock";

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
  const object = <Img className="about-concerts" img={img} />;

  return (
    <ResponsiveObjectOut className="about-concerts" object={object}>
      <MainBlock
        className="about-concerts"
        title="about-concerts"
        text={text}
      />
    </ResponsiveObjectOut>
  );
};

export default AboutConcerts;
