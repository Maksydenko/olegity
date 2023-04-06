import AboutBlock from "../AboutSection/AboutSection";

import childhoodWebp from "@img/lsp/webp/childhood.webp";
import childhood from "@img/lsp/jpg/childhood.jpg";

function Childhood() {
  const text = ["childhood-1", "childhood-2", "childhood-3"];

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

  return (
    <AboutBlock
      className="childhood"
      mainTitle="history"
      title="childhood"
      text={text}
      img={img}
    />
  );
}

export default Childhood;
