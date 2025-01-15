import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Tabs from "@/components/base/Tabs/Tabs";
import Videos from "./Videos/Videos";

import { VideosService } from "@/services/videos.service";

import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface AllVideosProps {
  className?: string;
}

const AllVideos: FC<AllVideosProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const supabase = useSupabaseClient<IDatabase>();

  const { data: musicVideosData, isLoading: isMusicVideosDataLoading } =
    useQuery({
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

  const { data: animatedVideosData, isLoading: isAnimatedVideosDataLoading } =
    useQuery({
      /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
      queryKey: [QueryKey.AnimatedVideos],
      queryFn: async () => {
        const response = await VideosService.getAnimatedVideos(supabase);

        if (!Array.isArray(response)) {
          return [];
        }

        return response;
      },
    });

  const tabs = [
    {
      id: "music-videos",
      title: t("music-videos"),
      content: (
        <Videos
          className="all-videos__videos"
          videos={musicVideosData || []}
          showLoader={isMusicVideosDataLoading}
        />
      ),
    },
    {
      id: "animated-videos",
      title: t("animated-videos"),
      content: (
        <Videos
          className="all-videos__videos"
          videos={animatedVideosData || []}
          showLoader={isAnimatedVideosDataLoading}
        />
      ),
    },
  ];

  return (
    <div className={clsx(className, "all-videos")}>
      <div className="all-videos__container">
        <Tabs className="all-videos__tabs" tabs={tabs} />
      </div>
    </div>
  );
};

export default AllVideos;
