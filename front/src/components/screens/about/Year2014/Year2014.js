import AboutSection from "../AboutSection/AboutSection";

import hipHopBattleWebp from "@img/lsp/webp/hip-hop-battle.webp";
import hipHopBattle from "@img/lsp/jpg/hip-hop-battle.jpg";

const Year2014 = () => {
  const img = [
    {
      src: hipHopBattleWebp,
      type: "webp",
    },
    {
      src: hipHopBattle,
      alt: "Oleg LSP at a hip-hop battle",
    },
  ];

  return <AboutSection className="year-2014" keyword="year-2014" img={img} />;
};

export default Year2014;
