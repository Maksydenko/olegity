import { FC } from "react";

import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QueryClientProps extends Partial<QueryClientProviderProps> {}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryProvider: FC<QueryClientProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
