export interface TMDBListItemResponse {
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListItemResponse extends TMDBListItemResponse {
  adult: boolean;
  title: string;
  original_title: string;
  release_date: string;
}

export interface TVListItemResponse extends TMDBListItemResponse {
  name: string;
  original_name: string;
  first_air_date: string;
}

// export interface MovieListResponse {
//   page: 1;
//   results: MovieListItemResponse[];
//   total_pages: number;
//   total_results: number;
// }

export interface TMDBListResponse<T> {
  page: 1;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MovieResponse extends MovieListItemResponse {
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
}
