import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMovies, useGetPopularTvShows } from "../movies.queries";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { parseImagePath } from "@/api/api.config";
import { MovieCardLoader } from "./MovieCardLoader";
import { MovieListItemResponse, TvShowListItemResponse } from "@/api/api.types";

export const MoviesGrid: FC = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const [search] = useSearchParams();
  const [page, setPage] = useState(
    !!search.get("page") ? +`${search.get("page")}` : 1
  );
  const [list, setList] = useState<(MovieListItemResponse | TvShowListItemResponse)[]>([]);

  const { data: moviesData, isFetching: isFetchingMovies } = useGetPopularMovies(page);
  const { data: tvShowsData, isFetching: isFetchingTvShows } = useGetPopularTvShows(page);

  const combinedList = useMemo(() => [
    ...(moviesData ? moviesData.results : []),
    ...(tvShowsData ? tvShowsData.results : []),
  ], [moviesData, tvShowsData]);

  const sortedList = useMemo(() =>
    combinedList.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0)), [combinedList]);

  const cardCollection = list?.map((item) => {
    const { id, original_title, original_name, poster_path } = item;
    const itemType = original_title ? "Movie" : "TV Show";
    return (
      <MovieCard
        key={id}
        movieId={`${id}`}
        title={original_title || original_name}
        itemType={itemType}
        image={parseImagePath(poster_path)}
      />
    );
  });

  const loader = Array(12)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  useEffect(() => {
    if (isFetchingMovies || isFetchingTvShows) return;
    setList(prevList => [...prevList, ...sortedList]);
  }, [sortedList, isFetchingMovies, isFetchingTvShows]);

  const handleObserver = useCallback((entries: any[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    if (list.length === 0) return;
    const element = observerRef.current;
    if (!element) return;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [handleObserver, list]);

  return (
    <Stack spacing={5}>
      <Grid container spacing={5}>
        {isFetchingMovies || isFetchingTvShows ? loader : cardCollection}
      </Grid>
      <div ref={observerRef} />
    </Stack>
  );
};
