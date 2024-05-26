import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import Music from "./Music/Music";

import { IAlbum, ISingle } from "@/interfaces/music.interface";

interface DiscographyProps {
  albums: IAlbum[];
  ep: IAlbum[];
  singles: ISingle[];
}

const Discography: FC<DiscographyProps> = ({ albums, ep, singles }) => {
  const { t } = useTranslation("common");

  return (
    <Layout className="discography-page">
      <Seo title={t("pages.discography")} />
      <Music
        className="discography-page__music"
        albums={albums}
        ep={ep}
        singles={singles}
      />
    </Layout>
  );
};

export default Discography;
