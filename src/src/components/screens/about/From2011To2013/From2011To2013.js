import AboutSection from "../AboutSection/AboutSection";

import lspAndAnglichaninWebp from "@img/lsp/webp/lsp-and-anglichanin.webp";
import lspAndAnglichanin from "@img/lsp/jpg/lsp-and-anglichanin.jpg";

const From2011To2013 = () => {
  const text = [
    "from-2011-to-2013-1",
    "from-2011-to-2013-2",
    "from-2011-to-2013-3",
  ];
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
      title="from-2011-to-2013"
      text={text}
      img={img}
    />
  );
};

export default From2011To2013;
