import { useTranslation } from "react-i18next";

import Tabs from "@base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import { albums } from "@constants/music/albums.const";
import { ep } from "@constants/music/ep.const";
import { singles } from "@constants/music/singles.const";

const Music = () => {
  const { t } = useTranslation();

  const tabs = [
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
        <Tabs className="music" tabs={tabs} />
      </div>
    </div>
  );
};

export default Music;
