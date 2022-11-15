import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useGetMovie } from "@/modules/movies/movies.queries";
import { MovieViewError } from "@/modules/movies/components/MovieViewError";
import { MovieViewLoader } from "@/modules/movies/components/MovieViewLoader";
import { MovieView } from "@/modules/movies/components/MovieView";
import { routes } from "./routes";

export const MovieRoute: FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { data, isError } = useGetMovie(movieId || "");

  const handleBackToList = () => {
    navigate(`${routes.home}${search}`);
  };

  if (isError) {
    return <MovieViewError backToList={handleBackToList} />;
  }

  if (!data) {
    return <MovieViewLoader backToList={handleBackToList} />;
  }

  return <MovieView data={data} backToList={handleBackToList} />;
};
