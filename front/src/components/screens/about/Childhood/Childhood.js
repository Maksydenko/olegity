import AboutBlock from "@shared/AboutSection/AboutSection";

import childhoodWebp from "@img/lsp/webp/childhood.webp";
import childhood from "@img/lsp/jpg/childhood.jpg";

const Childhood = () => {
  const img = [
    {
      src: childhoodWebp,
      type: "webp",
    },
    {
      src: childhood,
      alt: "Oleg LSP in childhood",
    },
  ];

  return <AboutBlock className="childhood" keyword="childhood" img={img} />;
};

export default Childhood;
