import AboutSection from "@shared/AboutSection/AboutSection";

import romaAnglichaninWebp from "@img/lsp/webp/roma-anglichanin.webp";
import romaAnglichanin from "@img/lsp/jpg/roma-anglichanin.jpg";

const From2016To2017 = () => {
  const img = [
    {
      src: romaAnglichaninWebp,
      type: "webp",
    },
    {
      src: romaAnglichanin,
      alt: "Roma Anglichanin",
    },
  ];

  return (
    <AboutSection
      className="from-2016-to-2017"
      keyword="from-2016-to-2017"
      img={img}
    />
  );
};

export default From2016To2017;
