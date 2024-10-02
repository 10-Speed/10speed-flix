import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const queryClient = new QueryClient();

export const QueryProvider: FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    {children}
  </QueryClientProvider>
);
