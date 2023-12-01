import { useContext, useEffect } from 'react';
import { MoviesContext, MoviesContextType } from '../context/movies-context';
import { useApi } from '../hooks/use-api';
import { FILTERS_SORT_BY } from '../shared/filters-mocks';
import { IMovieItem, IUseGetGenres, IUseGetMovies } from './api.types';

export const useGetGenres = (): IUseGetGenres => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru';
  const { data, isLoading, error } = useApi(url);
  return { genres: data?.genres || [], genresLoading: isLoading, error };
};

export const useGetMovies = (): IUseGetMovies => {
  const { movies } = useContext(MoviesContext) as MoviesContextType;

  const urlForPopular = `https://api.themoviedb.org/3/movie/popular?language=ru&page=${movies.page}`;
  const urlForTopRated = `https://api.themoviedb.org/3/movie/top_rated?language=ru&page=${movies.page}`;

  const isSelectPopular = movies.sortBy === FILTERS_SORT_BY[0];

  const { data, isLoading, error, callApi } = useApi<IMovieItem[]>(
    isSelectPopular ? urlForPopular : urlForTopRated,
  );

  useEffect(() => {
    callApi();
  }, [movies.sortBy, movies.page]); //eslint-disable-line

  return { movies: data?.results || [], moviesLoading: isLoading, error };
};
