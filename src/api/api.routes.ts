import { API } from "./api.config";
import {
  MovieListResponse,
  MovieResponse,
  ShowsListResponse,
} from "./api.types";

export const apiRoutes = {
  getPopularMovies: (page: number = 1) =>
    API.get<MovieListResponse>("/movie/popular", {
      params: {
        page,
      },
    }),
  getMovie: (movieId: string) => API.get<MovieResponse>(`/movie/${movieId}`),
  getPopularShows: (page: number = 1) =>
    API.get<ShowsListResponse>("/tv/popular", {
      params: {
        page,
      },
    }),
};
