import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Btn from "@/components/shared/Btn/Btn";
import Loader from "@/components/shared/Loader/Loader";
import VideosMainSlider from "./VideosMainSlider";

import { VideosService } from "@/services/videos.service";

import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface VideosMainProps {
  className?: string;
}

const VideosMain: FC<VideosMainProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const supabase = useSupabaseClient<IDatabase>();

  const { data: musicVideosData, isLoading } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.MusicVideos],
    queryFn: async () => {
      const response = await VideosService.getMusicVideos(supabase);

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  return (
    <section className={clsx(className, "main-videos")}>
      <h2 className="main-videos__title">{t("latest-videos")}</h2>
      {isLoading ? (
        <Loader className="main-videos__loader" />
      ) : (
        <VideosMainSlider musicVideos={musicVideosData || []} />
      )}
      <Btn className="main-videos__btn" path="/videos">
        {t("see-videos")}
      </Btn>
    </section>
  );
};

export default VideosMain;
