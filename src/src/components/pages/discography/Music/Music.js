import { useTranslation } from "react-i18next";

import Tabs from "@base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import albums from "@common/consts/music/albums";
import ep from "@common/consts/music/ep";
import singles from "@common/consts/music/singles";

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
