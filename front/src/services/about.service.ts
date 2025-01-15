import { combineData } from "@/utils/combineDataById.util";

import { QueryKey } from "@/enums/queryKey.enum";

import { IAbout } from "@/interfaces/about.interface";

import { TypeSupabase } from "@/types/supabase.type";

export const AboutService = {
  getAbout: async (supabase: TypeSupabase) => {
    const { data: aboutSectionsData, error: aboutSectionsError } =
      await supabase.from(QueryKey.About).select("*").order("ID", {
        ascending: true,
      });

    const { data: aboutTranslationsData, error: aboutTranslationsError } =
      await supabase.from("TranslationsAbout").select("*").order("ID", {
        ascending: true,
      });

    const error = aboutSectionsError || aboutTranslationsError;

    if (error) {
      return error;
    }

    const combinedData = combineData({
      parentData: aboutSectionsData,
      childData: aboutTranslationsData,
      childKey: "AboutSectionsID",
      parentKey: "translations",
    });

    return combinedData as IAbout[];
  },
};
