import { FC, useEffect, useState } from "react";
import { Grid, Stack, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMovies, useGetPopularTvShows } from "../movies.queries";
import { MovieCard } from "@/modules/movies/components/MovieCard";
import { parseImagePath } from "@/api/api.config";
import { MovieCardLoader } from "./MovieCardLoader";

export const MoviesGrid: FC = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(
    !!search.get("page") ? +`${search.get("page")}` : 1
  );

  const { data: moviesData, isFetching: isFetchingMovies } = useGetPopularMovies(page);
  const { data: tvShowsData, isFetching: isFetchingTvShows } = useGetPopularTvShows(page);

  const loader = Array(12)
    .fill(null)
    .map((_, index) => <MovieCardLoader key={index} />);

  const combinedList = [
    ...(moviesData ? moviesData.results : []),
    ...(tvShowsData ? tvShowsData.results : []),
  ];

  const sortedList = combinedList.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0));

  const cardCollection = sortedList?.map((item) => {
    const { id, original_title, original_name, poster_path } = item;
    const itemType = original_title ? "Movie" : "TV Show"
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

  useEffect(() => {
    setSearch({ page: `${page}` });
  }, [page, setSearch]);

  return (
    <Stack spacing={5}>
      <Grid container spacing={5}>
        {isFetchingMovies || isFetchingTvShows ? loader : cardCollection}
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
