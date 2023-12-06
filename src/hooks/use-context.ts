import { useContext } from 'react';
import { MoviesContext, MoviesContextType } from '../context/movies-context';
import { UserContext, UserContextType } from '../context/user-context';

export const useUserContext = () => useContext(UserContext) as UserContextType;
export const useMoviesContext = () =>
  useContext(MoviesContext) as MoviesContextType;
