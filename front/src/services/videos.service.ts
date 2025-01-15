import { QueryKey } from "@/enums/queryKey.enum";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

import { TypeSupabase } from "@/types/supabase.type";

export const VideosService = {
  getMusicVideos: async (supabase: TypeSupabase) => {
    const { data: musicVideosData, error } = await supabase
      .from(QueryKey.MusicVideos)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    if (error) {
      return error;
    }

    return musicVideosData as IMusicVideo[];
  },

  getAnimatedVideos: async (supabase: TypeSupabase) => {
    const { data: animatedVideosData, error } = await supabase
      .from(QueryKey.AnimatedVideos)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    if (error) {
      return error;
    }

    return animatedVideosData as IMusicVideo[];
  },
};
