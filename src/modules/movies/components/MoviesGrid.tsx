import { parseImagePath } from "@/api/api.config";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { Grid2, Pagination, Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMovies } from "../movies.queries";
import { MovieCardLoader } from "./MovieCardLoader";

export const MoviesGrid: FC = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(
    search.get("page") ? +`${search.get("page")}` : 1
  );
  const { data, isFetching } = useGetPopularMovies(page);

  const loader = Array(20)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const movies = data?.results?.map((item) => (
    <MovieCard
      key={item.id}
      movieId={`${item.id}`}
      title={item.original_title}
      image={parseImagePath(item.poster_path)}
    />
  ));

  useEffect(() => {
    setSearch({ page: `${page}` });
  }, [page, setSearch]);

  return (
    <Stack spacing={5}>
      <Grid2 container columns={{ xs: 12 }} spacing={5}>
        {isFetching ? loader : movies}
      </Grid2>
      <Stack alignItems="center" justifyContent="center">
        <Pagination
          onChange={(_, num) => setPage(num)}
          count={500}
          page={page}
        />
      </Stack>
    </Stack>
  );
};
