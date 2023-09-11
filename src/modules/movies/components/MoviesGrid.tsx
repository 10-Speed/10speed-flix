import { FC, useEffect, useState } from "react";
import { Grid, Stack, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMovies } from "../movies.queries";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { parseImagePath } from "@/api/api.config";
import { MovieCardLoader } from "./MovieCardLoader";

export const MoviesGrid: FC = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(
    !!search.get("page") ? +`${search.get("page")}` : 1
  );
  const { data, isFetching } = useGetPopularMovies(page);

  const loader = Array(20)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const movies = data?.results?.map((item) => {
    return (
      <MovieCard
        key={item.id}
        movieId={`${item.id}`}
        title={item.original_title}
        image={parseImagePath(item.poster_path)}
      />
    );
  });

  useEffect(() => {
    setSearch({ page: `${page}` });
  }, [page, setSearch]);

  return (
    <Stack spacing={5}>
      <Grid container spacing={5}>
        {isFetching ? loader : movies}
      </Grid>
      <Grid container justifyContent="center">
        <Pagination
          onChange={(_, num) => setPage(num)}
          count={500}
          page={page}
        />
      </Grid>
    </Stack>
  );
};
