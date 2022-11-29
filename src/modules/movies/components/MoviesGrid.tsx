import { FC, useEffect, useState } from "react";
import { Grid, Stack, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMovies, useGetPopularShows } from "../movies.queries";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { parseImagePath } from "@/api/api.config";
import { MovieCardLoader } from "./MovieCardLoader";
import { MergedItems, ItemTypes } from "@/api/api.types";

export const MoviesGrid: FC = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(
    !!search.get("page") ? +`${search.get("page")}` : 1
  );
  const { data: moviesData, isFetching: isMoviesFetching } =
    useGetPopularMovies(page);
  const { data: showsData, isFetching: isShowsFetching } =
    useGetPopularShows(page);

  const loader = Array(12)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const sortItems = () => {
    const mergedResults: MergedItems = [];
    if (moviesData) {
      mergedResults.push(...moviesData.results);
    }
    if (showsData) {
      mergedResults.push(...showsData.results);
    }

    const sortedResults = mergedResults?.sort((a, b) => {
      if (!a.popularity) a.popularity = 0;
      if (!b.popularity) b.popularity = 0;

      if (a.popularity < b.popularity) {
        return 1;
      }

      if (a.popularity > b.popularity) {
        return -1;
      }

      return 0;
    });

    return sortedResults;
  };

  const movies = sortItems()?.map((item) => {
    return (
      <MovieCard
        key={item.id}
        movieId={`${item.id}`}
        title={
          "original_title" in item
            ? item.original_title
            : "original_name" in item
            ? item.original_name
            : ""
        }
        image={parseImagePath(item.poster_path)}
        type={
          "original_title" in item
            ? ItemTypes.Movie
            : "original_name" in item
            ? ItemTypes.Show
            : ""
        }
      />
    );
  });

  useEffect(() => {
    setSearch({ page: `${page}` });
  }, [page, setSearch]);

  return (
    <Stack spacing={5}>
      <Grid container spacing={5}>
        {isMoviesFetching || isShowsFetching ? loader : movies}
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
