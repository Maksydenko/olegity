import AboutSection from "../AboutSection/AboutSection";

import groupLspWebp from "@img/lsp/webp/group-lsp.webp";
import groupLsp from "@img/lsp/jpg/group-lsp.jpg";

const From2017To2019 = () => {
  const text = [
    "from-2017-to-2018-1",
    "from-2017-to-2018-2",
    "from-2017-to-2018-3",
  ];
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
      title="from-2017-to-2018"
      text={text}
      img={img}
    />
  );
};

export default From2017To2019;
