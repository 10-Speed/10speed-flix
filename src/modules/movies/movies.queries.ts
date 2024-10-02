import { apiRoutes } from "@/api/api.routes";
import { useQuery } from "@tanstack/react-query";

export const useGetPopularMovies = (page: number = 1) => useQuery({
    queryKey: ["movies", page],
    queryFn: () => apiRoutes.getPopularMovies(page),
    select: (data) => data.data,
    staleTime: Infinity,
  });

export const useGetMovie = (movieId: string) => useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => apiRoutes.getMovie(movieId),
    select: (data) => data.data,
    staleTime: Infinity,
  });
