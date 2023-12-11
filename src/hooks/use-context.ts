import { useContext } from 'react';
import { MoviesContext, MoviesContextType } from '../context/movies-context';

export const useMoviesContext = () =>
  useContext(MoviesContext) as MoviesContextType;
