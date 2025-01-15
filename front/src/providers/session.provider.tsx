import { FC, PropsWithChildren } from "react";

import {
  SessionContextProvider,
  SessionContextProviderProps,
} from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface SessionProps
  extends Partial<PropsWithChildren<SessionContextProviderProps>> {}

export const SessionProvider: FC<SessionProps> = ({ children }) => (
  <SessionContextProvider supabaseClient={supabase}>
    {children}
  </SessionContextProvider>
);
