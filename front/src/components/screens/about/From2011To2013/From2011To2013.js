import AboutSection from "@shared/AboutSection/AboutSection";

import lspAndAnglichaninWebp from "@img/lsp/webp/lsp-and-anglichanin.webp";
import lspAndAnglichanin from "@img/lsp/jpg/lsp-and-anglichanin.jpg";

const From2011To2013 = () => {
  const img = [
    {
      src: lspAndAnglichaninWebp,
      type: "webp",
    },
    {
      src: lspAndAnglichanin,
      alt: "Oleg LSP and Roma Anglichanin",
    },
  ];

  return (
    <AboutSection
      className="from-2011-to-2013"
      keyword="from-2011-to-2013"
      img={img}
    />
  );
};

export default From2011To2013;
