import { useContext } from 'react';
import { UserContext, UserContextType } from '../../context/user-context';
import { useApi } from '../../hooks/use-api';
import { IMovieItem } from '../api-films/api-films.types';
import { IUseGetFavoritesList } from './api-favorites.type';

export const useGetFavoritesList = (): IUseGetFavoritesList => {
  const { user } = useContext(UserContext) as UserContextType;
  const url = `https://api.themoviedb.org/3/account/${user.current?.id}/favorite/movies`;
  const { data, isLoading, error, callApi } = useApi<{ results: IMovieItem[] }>(
    url,
  );

  return {
    favorites: data?.results || [],
    favoritesLoading: isLoading,
    error,
    callApi,
  };
};

export const useGetToggleFavorite = () => {
  const { token, user } = useContext(UserContext) as UserContextType;
  const url = `https://api.themoviedb.org/3/account/${user.current?.id}/favorite`;

  const onFetchData = async (id: number, type: 'add' | 'delete') => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token.current}`,
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: id,
        favorite: type === 'add',
      }),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result.success;
  };

  return { onFetchData };
};
