import { IMovieItem } from '../api-films/api-films.types';

export interface IDetailedMovie extends IMovieItem {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
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
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
}

interface IDetailedCreditsItem {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}

interface IDetailedCreditsCast extends IDetailedCreditsItem {
  cast_id: number;
  character: string;
  order: number;
}

interface IDetailedCreditsCrew extends IDetailedCreditsItem {
  known_for_department: string;
  department: string;
  job: string;
}

export interface IDetailedCredits {
  id: number;
  cast: IDetailedCreditsCast[];
  crew: IDetailedCreditsCrew[];
}

/***** hooks *****/
export interface IUseGetMovieDetailes {
  movieDetails: IDetailedMovie | null;
  detailsLoading: boolean;
  error: unknown;
}

export interface IUseGetMovieCredits {
  movieCredits: IDetailedCredits | null;
  creditsLoading: boolean;
  error: unknown;
}
