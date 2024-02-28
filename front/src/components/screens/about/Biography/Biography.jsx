import AboutSection from "@shared/AboutSection/AboutSection";

import biographyWebp from "@img/lsp/webp/biography.webp";
import biography from "@img/lsp/jpg/biography.jpg";

const Biography = () => {
  const img = [
    {
      src: biographyWebp,
      type: "webp",
    },
    {
      src: biography,
      alt: "Oleg LSP",
    },
  ];

  return <AboutSection className="biography" keyword="biography" img={img} />;
};

export default Biography;
