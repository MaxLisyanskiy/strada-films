import { useApi } from '../../hooks/use-api';
import {
  IDetailedCredits,
  IDetailedMovie,
  IUseGetMovieCredits,
  IUseGetMovieDetailes,
} from './api-detailed.types';

export const useGetMovieDetailes = (movieId: string): IUseGetMovieDetailes => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ru`;
  const { data, isLoading, error } = useApi<IDetailedMovie>(url);
  return { movieDetails: data, detailsLoading: isLoading, error };
};

export const useGetMovieCredits = (movieId: string): IUseGetMovieCredits => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ru`;
  const { data, isLoading, error } = useApi<IDetailedCredits>(url);
  return { movieCredits: data, creditsLoading: isLoading, error };
};
