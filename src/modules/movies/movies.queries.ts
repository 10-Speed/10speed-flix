import { apiRoutes } from "@/api/api.routes";
import { useQuery } from "@tanstack/react-query";

export const useGetPopularMovies = (page: number = 1) =>
  useQuery({
    queryKey: ["popularMovies", page],
    queryFn: () => apiRoutes.getPopularMovies(page),
    select: (data) => data.data,
    staleTime: Infinity
  });

export const useGetPopularTVShows = (page: number = 1) =>
  useQuery({
    queryKey: ["popularTVShows", page],
    queryFn: () => apiRoutes.getPopularTVShows(page),
    select: (data) => data.data,
    staleTime: Infinity
  });


export const useGetMovie = (movieId: string) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => apiRoutes.getMovie(movieId),
    select: (data) => data.data,
    staleTime: Infinity
  });

export const useGetMovieGenres = () =>
  useQuery({
    queryKey: ["MovieGenres"],
    queryFn: () => apiRoutes.getMovieGenres(),
    select: (data) => data.data,
    staleTime: Infinity
  });

export const useGetTVGenres = () =>
  useQuery({
    queryKey: ["TVGenres"],
    queryFn: () => apiRoutes.getTVShowGenres(),
    select: (data) => data.data,
    staleTime: Infinity
  });

export const useGetFilteredMovies = (page: number = 1, genres: string) =>
  useQuery({
    queryKey: ["filteredMovies", page, genres],
    queryFn: () => apiRoutes.getFilteredMovies(page, genres),
    select: (data) => data.data,
    staleTime: Infinity
  });

export const useGetFilteredTVShows = (page: number = 1, genres: string) =>
  useQuery({
    queryKey: ["filteredTVShows", page, genres],
    queryFn: () => apiRoutes.getFilteredTVShows(page, genres),
    select: (data) => data.data,
    staleTime: Infinity
  });