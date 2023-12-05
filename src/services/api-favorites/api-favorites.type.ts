import { IMovieItem } from '../api-films/api-films.types';

/***** hooks *****/
export interface IUseGetFavoritesList {
  favorites: IMovieItem[];
  favoritesLoading: boolean;
  error: unknown;
  callApi: () => void;
}
