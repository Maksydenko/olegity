import AboutSection from "../AboutSection/AboutSection";

import groupLspWebp from "@img/lsp/webp/group-lsp.webp";
import groupLsp from "@img/lsp/jpg/group-lsp.jpg";

const From2017To2019 = () => {
  const img = [
    {
      src: groupLspWebp,
      type: "webp",
    },
    {
      src: groupLsp,
      alt: "Group LSP",
    },
  ];

  return (
    <AboutSection
      className="from-2017-to-2018"
      keyword="from-2017-to-2018"
      img={img}
    />
  );
};

export default From2017To2019;
