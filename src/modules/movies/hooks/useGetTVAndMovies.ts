import { useCallback, useMemo } from "react";
import { useGetPopularMovies, useGetPopularTVShows } from "../movies.queries";
import { useSortByPopularity } from "./useSortByPopularity";

export const useGetTVAndMovies = () => {
  const {
    data: movieData,
    isFetching: isMovieFetching,
    isFetchingNextPage: isFetchingNextMoviePage,
    hasNextPage: hasNextMoviePage,
    fetchNextPage: fetchNextMoviePage,
  } = useGetPopularMovies();
  const {
    data: tvData,
    isFetching: isTVFetching,
    isFetchingNextPage: isFetchingNextTVPage,
    hasNextPage: hasNextTVPage,
    fetchNextPage: fetchNextTVPage,
  } = useGetPopularTVShows();
  const hasNextPage = useMemo(() => {
    return hasNextMoviePage && hasNextTVPage;
  }, [hasNextMoviePage, hasNextTVPage]);
  const fetchNextPage = useCallback(() => {
    fetchNextMoviePage();
    fetchNextTVPage();
  }, [fetchNextMoviePage, fetchNextTVPage]);
  const isFetching =
    (isMovieFetching && isTVFetching) ||
    (isFetchingNextMoviePage && isFetchingNextTVPage);
  const tvAndMovieList = useSortByPopularity(isFetching, movieData, tvData);

  return useMemo(() => {
    return {
      tvAndMovieList,
      isFetching,
      hasNextPage,
      fetchNextPage,
    };
  }, [fetchNextPage, hasNextPage, isFetching, tvAndMovieList]);
};
