import { FC } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

import Loader from "@/components/shared/Loader/Loader";
import GalleryGrids from "./GalleryGrids/GalleryGrids";

import { ConcertsService } from "@/services/concerts.service";

import { QueryKey } from "@/enums/queryKey.enum";

import { IDatabase } from "@/interfaces/database.interface";

interface GalleryProps {
  className?: string;
}

const Gallery: FC<GalleryProps> = ({ className }) => {
  const { t } = useTranslation("common");
  const supabase = useSupabaseClient<IDatabase>();

  const { data: concertsData, isLoading } = useQuery({
    /* eslint-disable-next-line @tanstack/query/exhaustive-deps */
    queryKey: [QueryKey.Concerts],
    queryFn: async () => {
      const response = await ConcertsService.getConcerts(supabase);

      if (!Array.isArray(response)) {
        return [];
      }

      return response;
    },
  });

  return (
    <section className={clsx(className, "gallery")}>
      <div className="gallery__container">
        <h2 className="gallery__title">{t("gallery")}</h2>
      </div>
      {isLoading ? (
        <Loader className="gallery__loader" />
      ) : (
        <GalleryGrids concerts={concertsData || []} />
      )}
    </section>
  );
};

export default Gallery;
