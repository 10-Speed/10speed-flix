import { API } from "./api.config";
import {
  GenresResponse,
  MovieListResponse,
  MovieResponse,
  TvListResponse
} from "./api.types";

export const apiRoutes = {
  /**
   * More details about this endpoint can be found here:
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  getPopularMovies: (page: number = 1) =>
    API.get<MovieListResponse>("/movie/popular", {
      params: {
        page
      }
    }),
  /**
   * More details about this endpoint can be found here:
   * @see https://developers.themoviedb.org/3/movies/get-movie-details
   */
  getPopularTVShows: (page: number = 1) =>
    API.get<TvListResponse>("/tv/popular", {
      params: {
        page
      }
    }),
  getMovie: (movieId: string) => API.get<MovieResponse>(`/movie/${movieId}`),
  getMovieGenres: () => API.get<GenresResponse>("genre/movie/list"),
  getTVShowGenres: () => API.get<GenresResponse>("genre/tv/list"),
  getFilteredMovies: (page: number = 1, genres: string) =>
    API.get<MovieListResponse>("discover/movie", {
      params: {
        with_genres: genres,
        page
      }
    }),
  getFilteredTVShows: (page: number = 1, genres: string) =>
    API.get<TvListResponse>("discover/tv", {
      params: {
        with_genres: genres,
        page
      }
    })
};
