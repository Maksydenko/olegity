import AboutSection from "../AboutSection/AboutSection";

import romaAnglichaninWebp from "@img/lsp/webp/roma-anglichanin.webp";
import romaAnglichanin from "@img/lsp/jpg/roma-anglichanin.jpg";

const From2016To2017 = () => {
  const text = [
    "from-2016-to-2017-1",
    "from-2016-to-2017-2",
    "from-2016-to-2017-3",
    "from-2016-to-2017-4",
    "from-2016-to-2017-5",
  ];
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
      title="from-2016-to-2017"
      text={text}
      img={img}
    />
  );
};

export default From2016To2017;
