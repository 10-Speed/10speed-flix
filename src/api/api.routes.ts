import { API } from "./api.config";
import {
  MovieListItemResponse,
  MovieResponse,
  TMDBListResponse,
  TVListItemResponse,
} from "./api.types";

export const apiRoutes = {
  getPopularMovies: (page: number = 1) =>
    API.get<TMDBListResponse<MovieListItemResponse>>("/movie/popular", {
      params: {
        page,
      },
    }),
  getPopularTVShows: (page: number = 1) =>
    API.get<TMDBListResponse<TVListItemResponse>>("/tv/popular", {
      params: {
        page,
      },
    }),
  getMovie: (movieId: string) => API.get<MovieResponse>(`/movie/${movieId}`),
};
