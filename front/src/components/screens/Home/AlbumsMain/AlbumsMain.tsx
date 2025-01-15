import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Btn from "@/components/shared/Btn/Btn";
import Loader from "@/components/shared/Loader/Loader";
import AlbumsMainSlider from "./AlbumsMainSlider";

import { DiscographyService } from "@/services/discography.service";

import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface AlbumsMainProps {
  className?: string;
}

const AlbumsMain: FC<AlbumsMainProps> = ({ className }) => {
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

  const { data: albumsData, isLoading } = useQuery({
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

  return (
    <section className={clsx(className, "albums-main")}>
      <div className={"albums-main__container"}>
        <h2 className="albums-main__title">{t("albums")}</h2>
        {isLoading ? (
          <Loader className="albums-main__loader" />
        ) : (
          <AlbumsMainSlider albums={albumsData || []} />
        )}
        <Btn className="albums-main__btn" path="/discography#albums">
          {t("see-discography")}
        </Btn>
      </div>
    </section>
  );
};

export default AlbumsMain;
