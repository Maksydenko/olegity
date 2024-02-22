import AboutSection from "../AboutSection/AboutSection";

import biographyWebp from "@img/lsp/webp/biography.webp";
import biography from "@img/lsp/jpg/biography.jpg";

const Biography = () => {
  const text = ["biography-1"];
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

  return (
    <AboutSection
      className="biography"
      title="biography"
      text={text}
      img={img}
    />
  );
};

export default Biography;
