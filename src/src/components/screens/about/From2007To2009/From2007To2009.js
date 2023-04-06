import AboutSection from "../AboutSection/AboutSection";

import youthWebp from "@img/lsp/webp/youth.webp";
import youth from "@img/lsp/jpg/youth.jpg";

function From2007To2009() {
  const text = [
    "from-2007-to-2009-1",
    "from-2007-to-2009-2",
    "from-2007-to-2009-3",
  ];

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
      title="from-2007-to-2009"
      text={text}
      img={img}
    />
  );
}

export default From2007To2009;
