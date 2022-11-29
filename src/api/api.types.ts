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

export interface MovieListResponse {
  page: 1;
  results: MovieListItemResponse[];
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

export interface ShowsListResponse {
  page: 1;
  results: ShowsListItemResponse[];
  total_pages: number;
  total_results: number;
}

export interface ShowsListItemResponse {
  poster_path?: string | null;
  popularity?: number;
  id?: number;
  backdrop_path?: string | null;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: Array<string>;
  genre_ids?: Array<number>;
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}

export type MergedItems = Array<MovieListItemResponse | ShowsListItemResponse>;

export enum ItemTypes {
  Movie = "movie",
  Show = "show",
}
