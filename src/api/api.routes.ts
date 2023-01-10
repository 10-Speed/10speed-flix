import { API } from "./api.config";
import { MovieListResponse, MovieResponse, TvShowListResponse } from "./api.types";

export const apiRoutes = {
  /**
   * More details about this endpoint can be found here:
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   */
  getPopularMovies: (page: number = 1) =>
    API.get<MovieListResponse>("/movie/popular", {
      params: {
        page,
      },
    }),
  /**
   * More details about this endpoint can be found here:
   * @see https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   */
  getPopularTvShows: (page: number = 1) =>
    API.get<TvShowListResponse>("/tv/popular", {
      params: {
        page,
      },
    }),
  /**
   * More details about this endpoint can be found here:
   * @see https://developers.themoviedb.org/3/movies/get-movie-details
   */
  getMovie: (movieId: string) => API.get<MovieResponse>(`/movie/${movieId}`),
};
