import AboutSection from "../AboutSection/AboutSection";

import lspAndPharaohWebp from "@img/lsp/webp/lsp-and-pharaoh.webp";
import lspAndPharaoh from "@img/lsp/jpg/lsp-and-pharaoh.jpg";

const Year2015 = () => {
  const text = ["year-2015-1", "year-2015-2", "year-2015-3", "year-2015-4"];
  const img = [
    {
      src: lspAndPharaohWebp,
      type: "webp",
    },
    {
      src: lspAndPharaoh,
      alt: "Oleg LSP and PHARAOH",
    },
  ];

  return (
    <AboutSection
      className="year-2015"
      title="year-2015"
      text={text}
      img={img}
    />
  );
};

export default Year2015;
