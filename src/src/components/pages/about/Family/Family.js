import AboutSection from "../AboutSection/AboutSection";

import familyWebp from "@img/lsp/webp/family.webp";
import family from "@img/lsp/jpg/family.jpg";

function Family() {
  const text = ["family-1"];

  const img = [
    {
      src: familyWebp,
      type: "webp",
    },
    {
      src: family,
      alt: "Family of Oleg LSP",
    },
  ];

  return (
    <AboutSection className="family" title="family" text={text} img={img} />
  );
}

export default Family;
