import { IGenre } from './api.types';

const options = (token: string) => {
  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getMovieList = async (
  token: string,
): Promise<{ genres: IGenre[] }> => {
  return fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=ru',
    options(token),
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => {
      console.error(err);
    });
};
