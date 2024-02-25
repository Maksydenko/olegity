import AboutSection from "@shared/AboutSection/AboutSection";

import lspNowWebp from "@img/lsp/webp/lsp-now.webp";
import lspNow from "@img/lsp/jpg/lsp-now.jpg";

const From2018ToPresent = () => {
  const img = [
    {
      src: lspNowWebp,
      type: "webp",
    },
    {
      src: lspNow,
      alt: "Oleg LSP",
    },
  ];

  return (
    <AboutSection
      className="from-2018-to-present"
      keyword="from-2018-to-present"
      img={img}
    />
  );
};

export default From2018ToPresent;
