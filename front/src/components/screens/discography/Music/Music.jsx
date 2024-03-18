// import { useTranslation } from "next-i18next";

import Tabs from "@/components/base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import { albums } from "@/data/music/albums.data";
import { ep } from "@/data/music/ep.data";
import { singles } from "@/data/music/singles.data";

const Music = () => {
  // const { t } = useTranslation();

  const tabs = [
    {
      id: "albums",
      title: "albums",
      content: <Albums albums={albums} />,
    },
    {
      id: "ep",
      title: "ep",
      content: <Albums albums={ep} type="ep" />,
    },
    {
      id: "singles",
      title: "singles",
      content: <Singles singles={singles} />,
    },
  ];

  return (
    <div className="music">
      <div className="music__container">
        <Tabs className="music__tabs" tabs={tabs} />
      </div>
    </div>
  );
};

export default Music;
