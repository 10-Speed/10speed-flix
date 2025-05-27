export interface MovieListItemResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface TVShowResponse {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string; // Format: YYYY-MM-DD
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieListResponse {
  page: number;
  results: MovieListItemResponse[];
  total_pages: number;
  total_results: number;
}

export interface TvListResponse {
  page: number;
  results: TVShowResponse[];
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

export interface GenresResponse  {
  genres: MovieGenre[];
}

export interface MovieGenre {
  id: number;
  name: string;
  isTvGenre?: boolean;
}
