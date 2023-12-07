import { useApi } from '../../hooks/use-api';
import { FILTERS_SORT_BY } from '../../shared/filters-mocks';
import { ApiOptions } from '../api-options';
import { IGenre, IMoviesResponse, IUseGetGenres } from './api-films.types';

export const useGetGenres = (): IUseGetGenres => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru';
  const { data, isLoading, error } = useApi<{ genres: IGenre[] }>(url);
  return { genres: data?.genres || [], genresLoading: isLoading, error };
};

export const getMovies = async (
  page: number,
  sortBy: string,
  token: string,
): Promise<IMoviesResponse> => {
  const urlForPopular = `https://api.themoviedb.org/3/movie/popular?language=ru&page=${page}`;
  const urlForTopRated = `https://api.themoviedb.org/3/movie/top_rated?language=ru&page=${page}`;

  const isSelectPopular = sortBy === FILTERS_SORT_BY[0];

  const response = await fetch(
    isSelectPopular ? urlForPopular : urlForTopRated,
    ApiOptions(token),
  );
  const result: IMoviesResponse = await response.json();

  return result;
};

export const searchMovies = async (
  query: string,
  page: number,
  token: string,
): Promise<IMoviesResponse> => {
  const url = `https://api.themoviedb.org/3/search/movie?language=ru&query=${query}&page=${page}`;

  const response = await fetch(url, ApiOptions(token));
  const result: IMoviesResponse = await response.json();

  return result;
};
