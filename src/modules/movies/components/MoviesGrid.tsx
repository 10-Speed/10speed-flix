import { FC } from "react";
import { Grid, Stack } from "@mui/material";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { parseImagePath } from "@/api/api.config";
import { MovieCardLoader } from "./MovieCardLoader";
import { useGetTVAndMovies } from "../hooks/useGetTVAndMovies";
import { useInfiniteLoading } from "../hooks/useInfiniteLoading";

export const MoviesGrid: FC = () => {
  const { tvAndMovieList, isFetching, hasNextPage, fetchNextPage } =
    useGetTVAndMovies();

  const loader = Array(12)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const movies = tvAndMovieList.map((item) => {
    return (
      <MovieCard
        key={item.id}
        titleId={`${item.id}`}
        title={"title" in item ? item.title : item.name}
        titleType={"title" in item ? "movie" : "tv"}
        image={parseImagePath(item.poster_path)}
      />
    );
  });

  useInfiniteLoading(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  return (
    <Stack spacing={5}>
      <Grid container spacing={5}>
        {movies}
        {isFetching && loader}
      </Grid>
    </Stack>
  );
};
