export interface MovieListItemResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: never;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvShowListItemResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  original_title: never;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  name: string;
  title: never;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListResponse {
  page: number;
  results: MovieListItemResponse[];
  total_pages: number;
  total_results: number;
}

export interface TvShowListResponse {
  page: number;
  results: TvShowListItemResponse[];
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
  imdb_id: string | null;
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
