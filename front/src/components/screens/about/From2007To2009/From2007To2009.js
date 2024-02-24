import AboutSection from "../AboutSection/AboutSection";

import youthWebp from "@img/lsp/webp/youth.webp";
import youth from "@img/lsp/jpg/youth.jpg";

const From2007To2009 = () => {
  const img = [
    {
      src: youthWebp,
      type: "webp",
    },
    {
      src: youth,
      alt: "Young Oleg LSP",
    },
  ];

  return (
    <AboutSection
      className="from-2007-to-2009"
      keyword="from-2007-to-2009"
      img={img}
    />
  );
};

export default From2007To2009;
