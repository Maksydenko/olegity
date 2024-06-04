import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Tabs from "@/components/base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import useMusicStore from "@/stores/useMusic.store";

import { MusicId } from "@/enums/musicId.enum";

interface MusicProps {
  className?: string;
}

const Music: FC<MusicProps> = ({ className }) => {
  const { t } = useTranslation("common");

  const { albums, ep, singles } = useMusicStore();

  const tabs = [
    {
      id: MusicId.Albums,
      title: t("albums"),
      content: <Albums className="music__albums" albums={albums} />,
    },
    {
      id: MusicId.EP,
      title: t("ep"),
      content: <Albums className="music__albums" albums={ep} />,
    },
    {
      id: MusicId.Singles,
      title: t("singles"),
      content: <Singles className="music__singles" singles={singles} />,
    },
  ];

  return (
    <div className={clsx(className, "music")}>
      <div className="music__container">
        <Tabs className="music__tabs" tabs={tabs} />
      </div>
    </div>
  );
};

export default Music;
