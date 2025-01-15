import { QueryKey } from "@/enums/queryKey.enum";

import { IConcert } from "@/interfaces/concert.interface";

import { TypeSupabase } from "@/types/supabase.type";

export const ConcertsService = {
  getConcerts: async (supabase: TypeSupabase) => {
    const { data: concertsData, error } = await supabase
      .from(QueryKey.Concerts)
      .select("*")
      .order("ID", {
        ascending: true,
      });

    if (error) {
      return error;
    }

    return concertsData as IConcert[];
  },
};
