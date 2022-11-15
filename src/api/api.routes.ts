import { API } from "./api.config";
import { MovieListResponse, MovieResponse } from "./api.types";

export const apiRoutes = {
  getPopularMovies: (page: number = 1) =>
    API.get<MovieListResponse>("/movie/popular", {
      params: {
        page,
      },
    }),
  getMovie: (movieId: string) => API.get<MovieResponse>(`/movie/${movieId}`),
};
