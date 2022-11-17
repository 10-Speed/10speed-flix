import { useMemo } from "react";

import { useGetPopularMovies, useGetPopularTVShows } from "../movies.queries";

type InfiniteMovieData = ReturnType<typeof useGetPopularMovies>["data"];
type InfiniteTVData = ReturnType<typeof useGetPopularTVShows>["data"];

export const useSortByPopularity = (
  isFetching: boolean,
  movieData?: InfiniteMovieData,
  tvData?: InfiniteTVData
) => {
  return useMemo(() => {
    if (isFetching || !movieData || !tvData) {
      return [];
    }

    const mergedPages = [...movieData.pages, ...tvData.pages];

    return mergedPages
      .map((page) => page.data.results)
      .flat()
      .sort((left, right) => {
        return right.popularity - left.popularity;
      });
  }, [isFetching, movieData, tvData]);
};
