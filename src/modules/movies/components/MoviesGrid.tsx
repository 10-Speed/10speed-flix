import { parseImagePath } from "@/api/api.config";
import { MovieGenre } from "@/api/api.types";
import FilterBox from "@/components/FilterBox";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { Grid2, Pagination, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useGetFilteredMovies,
  useGetFilteredTVShows,
  useGetMovieGenres,
  useGetPopularMovies,
  useGetPopularTVShows,
  useGetTVGenres
} from "../movies.queries";
import { MovieCardLoader } from "./MovieCardLoader";

export const MoviesGrid: FC = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(
    search.get("page") ? +`${search.get("page")}` : 1
  );
  const [selectedGenres, setSelectedGenres] = useState<MovieGenre[]>([]);
  const { data: popularMovies, isFetching } = useGetPopularMovies(page);
  const { data: popularTVShows, isFetching: isFetchingPopularTVShows } =
    useGetPopularTVShows(page);
  const { data: movieGenresData, isFetching: isGenresFetching } =
    useGetMovieGenres();
  const { data: tvGenresData, isFetching: isTVGenresFetching } =
    useGetTVGenres();
  const { data: filteredMovies, isFetching: isFilteredMoviesFetching } =
    useGetFilteredMovies(
      page,
      selectedGenres.filter(x=> !x.isTvGenre).map((genre) => genre.id).join(",")
    );
  const { data: filteredTVShows, isFetching: isFilteredTVShowsFetching } =
    useGetFilteredTVShows(
      page,
      selectedGenres.filter(x=> x.isTvGenre).map((genre) => genre.id).join(",")
    );

  const loader = Array(20)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const popularData = {
    page,
    total_pages:
      popularMovies?.total_pages ?? 0 + popularTVShows?.total_pages ?? 0,
    results: [
      ...(popularMovies?.results ?? []),
      ...(popularTVShows?.results.map((tvShow) => ({
        ...tvShow,
        ...{ is_tv_show: true }
      })) ?? [])
    ].sort((a, b) => b.popularity - a.popularity)
  };

  const filteredData = {
    page,
    total_pages:
      filteredMovies?.total_pages ?? 0 + filteredTVShows?.total_pages ?? 0,
    results: [
      ...(filteredMovies?.results ?? []),
      ...(filteredTVShows?.results.map((tvShow) => ({
        ...tvShow,
        ...{ is_tv_show: true }
      })) ?? [])
    ].sort((a, b) => b.popularity - a.popularity)
  };

  const getMovieCards = () => {
    const moviesData =
      filteredMovies &&
      filteredMovies?.results?.length > 0 &&
      selectedGenres.length > 0
        ? filteredData
        : popularData;

    if (isFetching || isFetchingPopularTVShows || isFilteredMoviesFetching) {
      return loader;
    }

    if (moviesData) {
      return moviesData?.results?.map((item) => (
        <MovieCard
          key={item.id}
          movieId={`${item.id}`}
          isTvShow={item.is_tv_show}
          title={item.original_title ?? item.original_name}
          image={parseImagePath(item.poster_path)}
        />
      ));
    }
  };

  useEffect(() => {
    setSearch({ page: `${page}` });
  }, [page, setSearch]);

  return (
    <Stack spacing={5}>
      <Stack>
        <FilterBox
          options={[
            ...(movieGenresData?.genres ?? []),
            ...(tvGenresData?.genres?.map((x) => ({
              ...x,
              ...{ isTvGenre: true }
            })) ?? [])
          ]}
          isFetching={isGenresFetching}
          handleFilterChange={setSelectedGenres}
          selectedGenres={selectedGenres}
        />
      </Stack>
      <Stack>
        <Typography></Typography>
      </Stack>
      <Grid2 container columns={{ xs: 12 }} spacing={5}>
        {getMovieCards()}
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
