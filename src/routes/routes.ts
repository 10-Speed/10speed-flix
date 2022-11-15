export const routes = {
  home: "/",
  movie: (movieId: string = ":movieId") => `/movie/${movieId}`,
  notFound: "*",
};
