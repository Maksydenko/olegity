import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Tabs from "@/components/base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import { MusicId } from "@/enums/musicId.enum";

import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface MusicProps {
  className?: string;
  albums: IAlbum[];
  ep: IAlbum[];
  singles: ISingle[];
}

const Music: FC<MusicProps> = ({ className, albums, ep, singles }) => {
  const { t } = useTranslation("common");

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
      content: (
        <Singles className="music__singles" singles={singles?.allSingles} />
      ),
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
