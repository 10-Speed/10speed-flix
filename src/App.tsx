import { FC } from "react";
import { Route } from "react-router-dom";

import { MainLayout } from "@/components/MainLayout";
import { RouterProvider } from "@/providers/RouterProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { HomeRoute } from "@/routes/HomeRoute";
import { NotFoundRoute } from "@/routes/NotFoundRoute";
import { routes } from "@/routes/routes";
import { QueryProvider } from "./providers/QueryProvider";
import { MovieRoute } from "./routes/MovieRoute";

const App: FC = () => (
  <QueryProvider>
    <ThemeProvider>
      <RouterProvider>
        <Route element={<MainLayout />}>
          <Route path={routes.home} element={<HomeRoute />} />
          <Route path={routes.movie()} element={<MovieRoute />} />
          <Route path={routes.notFound} element={<NotFoundRoute />} />
        </Route>
      </RouterProvider>
    </ThemeProvider>
  </QueryProvider>
);

export default App;
