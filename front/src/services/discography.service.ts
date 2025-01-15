import { combineData } from "@/utils/combineDataById.util";

import { QueryKey } from "@/enums/queryKey.enum";

import { IGenre } from "@/interfaces/genre.interface";

import { TypeSupabase } from "@/types/supabase.type";

export const DiscographyService = {
  getGenres: async (supabase: TypeSupabase) => {
    const { data: genresData, error: genresError } = await supabase
      .from(QueryKey.Genres)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    if (genresError) {
      return genresError;
    }

    return genresData as IGenre[];
  },

  getAlbums: async (supabase: TypeSupabase, genres: IGenre[]) => {
    const { data: albumsData, error: albumsError } = await supabase
      .from(QueryKey.Albums)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    const { data: albumsTrackListData, error: albumsTrackListError } =
      await supabase.from("TrackListAlbum").select("*").order("ID", {
        ascending: true,
      });

    const error = albumsError || albumsTrackListError;

    if (error) {
      return error;
    }

    const albumsWithTrackListData = combineData({
      parentData: albumsData,
      childData: albumsTrackListData,
      childKey: "pageID",
      parentKey: "trackList",
    });

    const combinedData = combineData({
      parentData: albumsWithTrackListData,
      childData: genres,
      childKey: "genreID",
      parentKey: "genre",
    });

    return combinedData;
  },

  getEP: async (supabase: TypeSupabase, genres: IGenre[]) => {
    const { data: epData, error: epError } = await supabase
      .from(QueryKey.EP)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    const { data: epTrackListData, error: epTrackListError } = await supabase
      .from("TrackListEp")
      .select("*")
      .order("ID", {
        ascending: true,
      });

    const error = epError || epTrackListError;

    if (error) {
      return error;
    }

    const epWithTrackListData = combineData({
      parentData: epData,
      childData: epTrackListData,
      childKey: "epID",
      parentKey: "trackList",
    });

    const combinedData = combineData({
      parentData: epWithTrackListData,
      childData: genres,
      childKey: "genreID",
      parentKey: "genre",
    });

    return combinedData;
  },

  getSingles: async (supabase: TypeSupabase, genres: IGenre[]) => {
    const { data: singlesData, error: singlesError } = await supabase
      .from(QueryKey.Singles)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    if (singlesError) {
      return singlesError;
    }

    const combinedData = combineData({
      parentData: singlesData,
      childData: genres,
      childKey: "genreID",
      parentKey: "genre",
    });

    return combinedData;
  },
};
