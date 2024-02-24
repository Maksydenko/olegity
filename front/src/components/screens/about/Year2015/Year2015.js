import AboutSection from "../AboutSection/AboutSection";

import lspAndPharaohWebp from "@img/lsp/webp/lsp-and-pharaoh.webp";
import lspAndPharaoh from "@img/lsp/jpg/lsp-and-pharaoh.jpg";

const Year2015 = () => {
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

  return <AboutSection className="year-2015" keyword="year-2015" img={img} />;
};

export default Year2015;
