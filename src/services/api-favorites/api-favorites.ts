import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/use-api';
import useUserSelectors from '../../store/selectors/userSelectors';
import { IMovieItem } from '../api-films/api-films.types';
import { IUseGetFavoritesList } from './api-favorites.type';

export const useGetFavoritesList = (): IUseGetFavoritesList => {
  const { user } = useUserSelectors();
  const url = `https://api.themoviedb.org/3/account/${user?.id}/favorite/movies`;
  const [favorites, setFavorites] = useState<IMovieItem[]>([]);

  const { data, isLoading, error, callApi } = useApi<{ results: IMovieItem[] }>(
    url,
  );

  useEffect(() => setFavorites(data?.results || []), [data]);

  const onToggleFavorite = (newFavorites: IMovieItem[]) =>
    setFavorites(newFavorites);

  return {
    favorites: favorites,
    favoritesLoading: isLoading,
    error,
    callApi,
    onToggleFavorite,
  };
};

export const useGetToggleFavorite = () => {
  const { token, user } = useUserSelectors();
  const url = `https://api.themoviedb.org/3/account/${user?.id}/favorite`;

  const onFetchData = async (id: number, type: 'add' | 'delete') => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
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
