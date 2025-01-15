import { SupabaseClient } from "@supabase/supabase-js";

import { IDatabase } from "../interfaces/database.interface";

export type TypeSupabase = SupabaseClient<IDatabase, "public", any>;
