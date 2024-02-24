import AboutSection from "../AboutSection/AboutSection";

import familyWebp from "@img/lsp/webp/family.webp";
import family from "@img/lsp/jpg/family.jpg";

const Family = () => {
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

  return <AboutSection className="family" keyword="family" img={img} />;
};

export default Family;
