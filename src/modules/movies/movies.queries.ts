import { apiRoutes } from "@/api/api.routes";
import { useQuery } from "@tanstack/react-query";

export const useGetPopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: () => apiRoutes.getPopularMovies(page),
    select: (data) => data.data,
    staleTime: Infinity,
  });
};

export const useGetMovie = (movieId: string) => {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => apiRoutes.getMovie(movieId),
    select: (data) => data.data,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export const useGetPopularTvShows = (page: number = 1) => {
  return useQuery({
    queryKey: ["tvShows", page],
    queryFn: () => apiRoutes.getPopularTvShows(page),
    select: (seriesData) => seriesData.data,
    staleTime: Infinity,
  })
}
