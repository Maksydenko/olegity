import AboutSection from "../AboutSection/AboutSection";

import lspNowWebp from "@img/lsp/webp/lsp-now.webp";
import lspNow from "@img/lsp/jpg/lsp-now.jpg";

const From2018ToPresent = () => {
  const text = [
    "from-2018-to-present-1",
    "from-2018-to-present-2",
    "from-2018-to-present-3",
    "from-2018-to-present-4",
    "from-2018-to-present-5",
  ];
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
      title="from-2018-to-present"
      text={text}
      img={img}
    />
  );
};

export default From2018ToPresent;
