import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Tabs from "@/components/base/Tabs/Tabs";
import Albums from "./Albums/Albums";
import Singles from "./Singles/Singles";

import { DiscographyService } from "@/services/discography.service";

import { MusicId } from "@/enums/musicId.enum";
import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface MusicProps {
  className?: string;
}

const Music: FC<MusicProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const supabase = useSupabaseClient<IDatabase>();

  const { data: genresData } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.Genres],
    queryFn: async () => {
      const response = await DiscographyService.getGenres(supabase);

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  const { data: albumsData } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.Albums, genresData],
    enabled: !!genresData,
    queryFn: async () => {
      const response = await DiscographyService.getAlbums(
        supabase,
        genresData!
      );

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  const { data: epData } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.EP, genresData],
    enabled: !!genresData,
    queryFn: async () => {
      const response = await DiscographyService.getEP(supabase, genresData!);

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  const { data: singlesData } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.Singles, genresData],
    enabled: !!genresData,
    queryFn: async () => {
      const response = await DiscographyService.getSingles(
        supabase,
        genresData!
      );

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  const tabs = [
    {
      id: MusicId.Albums,
      title: t("albums"),
      content: <Albums className="music__albums" albums={albumsData || []} />,
    },
    {
      id: MusicId.EP,
      title: t("ep"),
      content: <Albums className="music__albums" albums={epData || []} />,
    },
    {
      id: MusicId.Singles,
      title: t("singles"),
      content: (
        <Singles className="music__singles" singles={singlesData || []} />
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
