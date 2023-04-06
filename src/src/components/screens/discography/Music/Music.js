import { useTranslation } from "react-i18next";

import Tabs from "@base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import albums from "@constants/music/albums";
import ep from "@constants/music/ep";
import singles from "@constants/music/singles";

function Music() {
  const { t } = useTranslation();

  const music = [
    {
      id: 1,
      title: t("albums"),
      content: <Albums albums={albums} />,
    },
    {
      id: 2,
      title: t("ep"),
      content: <Albums albums={ep} />,
    },
    {
      id: 3,
      title: t("singles"),
      content: <Singles singles={singles} />,
    },
  ];

  return (
    <div className="music">
      <div className="music__container">
        <Tabs className="music" tabs={music} />
      </div>
    </div>
  );
}

export default Music;
