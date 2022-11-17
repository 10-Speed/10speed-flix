import { apiRoutes } from "@/api/api.routes";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetPopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => apiRoutes.getPopularMovies(pageParam),
    select: (data) => data,
    staleTime: Infinity,
    getNextPageParam: (lastPage) => lastPage.data.page + 1,
  });
};

export const useGetPopularTVShows = (page: number = 1) => {
  return useInfiniteQuery({
    queryKey: ["tv"],
    queryFn: ({ pageParam = 1 }) => apiRoutes.getPopularTVShows(pageParam),
    select: (data) => data,
    staleTime: Infinity,
    getNextPageParam: (lastPage) => lastPage.data.page + 1,
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
